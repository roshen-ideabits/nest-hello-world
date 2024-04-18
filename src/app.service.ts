import { Inject, Injectable } from '@nestjs/common';
import { ConstantsAbstract } from './abstracts/constants.abstract';

@Injectable()
export class AppService {
  public constructor(
    @Inject('CONSTANTS')
    private readonly constants: { app_name: string },
    private readonly constantsService: ConstantsAbstract,
  ) {}

  getHello(): string {
    return `Hello World! Welcome to ${this.constants.app_name}`;
  }

  getHello1(): string {
    return `Hello World! Welcome to ${this.constantsService.app_name}`;
  }
}
