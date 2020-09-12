import { Module } from '@nestjs/common';
import { Winston } from './logger.service';

@Module({
  providers: [Winston],
  exports: [Winston],
})

export class LoggerModule {}
