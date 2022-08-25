import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SMSService } from './sms.service';
import { SMSController } from './sms.controller';
import { SMSMiddleware } from './sms.middleware';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [SMSController],
  providers: [SMSService],
  imports: [
    ClientsModule.register([
      {
        name: 'SMS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.QUEUE_URI],
          queue: process.env.QUEUE_NAME,
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ]
})
export class SMSModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SMSMiddleware)
      .exclude(
        {path: 'sms', method: RequestMethod.GET}
      )
      .forRoutes('sms');
  }
}
