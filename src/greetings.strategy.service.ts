import { Injectable } from '@nestjs/common';
import { ConstantsAbstract } from './abstracts/constants.abstract';

@Injectable()
export class GreetingsStrategyService {
  public constructor(private readonly constantsService: ConstantsAbstract) {}

  getHello(): string {
    return `Hello World! Welcome to ${this.constantsService.app_name}`;
  }
}
