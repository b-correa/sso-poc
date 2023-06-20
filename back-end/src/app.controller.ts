import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LogGuard } from './guard/log.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(LogGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
