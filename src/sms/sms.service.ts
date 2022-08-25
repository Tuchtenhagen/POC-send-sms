import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SMSService {

  constructor(@Inject('SMS_SERVICE') private client: ClientProxy){}

  getMessageFromApi(): String {
    return "getting Message from Api"
  } 

  sendSMStoQueue(SendSMSDto): String {
    
    const processedNumber = this.processNumber(SendSMSDto.phoneNumber)
    const DDD = this.getDDD(processedNumber)
    
    this.sendEvent(DDD)

      return 'sent to queue'
  }

  private processNumber(number): String {
    return number.trim().replaceAll(" ", "")
  }

  private getDDD(number): String {
    const regex = /^[\d]{2}/
    return number.match(regex)
  }

  private sendEvent(event): void {
    this.client.connect()
    this.client.emit(process.env.QUEUE_NAME, event)
  }
}
