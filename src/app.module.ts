import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConstantsService } from './services/constants.service';
import { ConstantsAbstract } from './abstracts/constants.abstract';
import { GreetingsService } from './greetings.service';
import { GreetingsStrategyService } from './greetings.strategy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GreetingsService, GreetingsStrategyService],
})
export class AppModule {}
