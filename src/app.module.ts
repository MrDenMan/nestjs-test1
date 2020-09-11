import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [WinstonModule.forRoot({
    // options
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
