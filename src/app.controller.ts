import { Controller, Get } from '@nestjs/common';
import { GreetingsService } from './greetings.service';
import { GreetingsStrategyService } from './greetings.strategy.service';

@Controller()
export class AppController {
  constructor(
    private readonly greetingsService: GreetingsService,
    private readonly greetingsStrategyService: GreetingsStrategyService,
  ) {}

  @Get('/hello')
  getHello(): string {
    return this.greetingsService.getHello();
  }

  @Get('/hello-strategy')
  getHello1(): string {
    return this.greetingsStrategyService.getHello();
  }
}
