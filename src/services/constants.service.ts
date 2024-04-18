import { Inject, Injectable } from '@nestjs/common';
import { ConstantsAbstract } from 'src/abstracts/constants.abstract';

@Injectable()
export class ConstantsService implements ConstantsAbstract {
  public readonly app_name: string;
  public constructor(
    @Inject('CONSTANTS') private readonly constants: { app_name: string },
  ) {
    this.app_name = constants.app_name;
  }
}
