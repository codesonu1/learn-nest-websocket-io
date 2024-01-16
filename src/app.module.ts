import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { myGatewayModule } from './module/websocket/websocket.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    myGatewayModule,
    AuthModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.MONGODB_DEV_URI }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
