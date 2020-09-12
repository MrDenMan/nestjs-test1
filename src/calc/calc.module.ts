import { Module } from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';
import { Winston } from '../logger/logger.service';

@Module({
  controllers: [CalcController],
  providers: [CalcService, Winston]
})
export class CalcModule {}
