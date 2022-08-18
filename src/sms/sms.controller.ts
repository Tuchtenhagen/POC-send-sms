import { Body, Controller, Get, Post } from '@nestjs/common';
import { SMSService } from './sms.service';
import { SendSMSDto } from './sms.dto';

@Controller("sms")
export class SMSController {
  constructor(private readonly integrationService: SMSService) {}

  @Get()
  getHello(): String {
    return this.integrationService.getMessageFromApi();
  }

  @Post()
  sendSMStoQueue(@Body() SendSMSDto: SendSMSDto): String {
    return this.integrationService.sendSMStoQueue(SendSMSDto);
  }
}
