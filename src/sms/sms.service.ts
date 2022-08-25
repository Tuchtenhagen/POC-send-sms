import { Injectable } from '@nestjs/common';

@Injectable()
export class SMSService {

  getMessageFromApi(): String {
    return "getting Message from Api"
  } 

  sendSMStoQueue(SendSMSDto): String {
    
    const processedNumber = this.processNumber(SendSMSDto.phoneNumber)
    const DDD = this.getDDD(processedNumber)

    

    return DDD
  }

  private processNumber(number): String {
    return number.trim().replaceAll(" ", "")
  }

  private getDDD(number): String {
    const regex = /^[\d]{2}/
    return number.match(regex)
  }
}
