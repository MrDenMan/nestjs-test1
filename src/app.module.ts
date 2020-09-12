import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcModule } from './calc/calc.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [CalcModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
