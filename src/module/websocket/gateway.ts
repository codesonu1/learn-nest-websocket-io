import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway({
  //define cors here..
})
export class myGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket: any): any => {
      console.log(socket.id);
      console.log('connceted');
    });
  }
  @SubscribeMessage('newmessage')
  newessage(@MessageBody() body) {
    this.server.emit('onMessage', {
      msg: 'new message',
      content: body,
    });
  }
}
