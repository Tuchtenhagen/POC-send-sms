import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SMSMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('process request...')
    next()
  }
}
