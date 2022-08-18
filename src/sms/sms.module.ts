import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SMSService } from './sms.service';
import { SMSController } from './sms.controller';
import { SMSMiddleware } from './sms.middleware';

@Module({
  controllers: [SMSController],
  providers: [SMSService]
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
