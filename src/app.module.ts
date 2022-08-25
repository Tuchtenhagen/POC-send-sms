import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { SMSModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  // controllers: [AppController],
  // providers: [AppService],
  imports: [
    SMSModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    ClientsModule.register([{
      name: 'SMS_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: [process.env.QUEUE_URI],
        queue: process.env.QUEUE_NAME,
        queueOptions: {
          durable: false
        }
      }
    }])
  ],
})
export class AppModule {}
