import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {
  public constructor(
    @Inject('CONSTANTS')
    private readonly constants: { app_name: string },
  ) {}

  getHello(): string {
    return `Hello World! Welcome to ${this.constants.app_name}`;
  }
}
