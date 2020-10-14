import { Module } from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';
import { Winston } from '../logger/logger.service';
import { EsModule } from '../es/es.module';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Module({
  imports: [EsModule],
  controllers: [CalcController],
  providers: [CalcService, Winston]
})
export class CalcModule {}
