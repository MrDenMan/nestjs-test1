import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcModule } from './calc/calc.module';
import { WinstonModule } from 'nest-winston';
import { loggerOptions } from './logger/logger-options';

import { EsModule } from './es/es.module';

@Module({
  imports: [CalcModule, WinstonModule.forRoot(loggerOptions), EsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
export class SearchModule {}

