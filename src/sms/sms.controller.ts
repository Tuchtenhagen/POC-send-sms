import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { SMSService } from './sms.service';
import { SendSMSDto } from './sms.dto';
import { JoiValidationPipe } from './pipe-validation';
import { SMSSchema } from './sms-schema';

@Controller("sms")
export class SMSController {
  constructor(private readonly integrationService: SMSService) {}

  @Get()
  getHello(): String {
    return this.integrationService.getMessageFromApi();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(SMSSchema))
  sendSMStoQueue(@Body() SendSMSDto: SendSMSDto): String {
    return this.integrationService.sendSMStoQueue(SendSMSDto);
  }
}
