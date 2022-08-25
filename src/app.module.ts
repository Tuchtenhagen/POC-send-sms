import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { SMSModule } from './sms/sms.module';

@Module({
  // controllers: [AppController],
  // providers: [AppService],
  imports: [SMSModule],
})
export class AppModule {}
