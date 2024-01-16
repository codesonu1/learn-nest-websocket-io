import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { myGatewayModule } from './module/websocket/websocket.module';

@Module({
  imports: [myGatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
