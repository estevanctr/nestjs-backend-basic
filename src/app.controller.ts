import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getHelloTest(): string {
    return this.appService.getHello();
  }
  
  @Get('test2')
  getHelloTest2(): string {
    return this.appService.getHello();
  }
}
