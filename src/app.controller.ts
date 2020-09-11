import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
/*
@Controller('cats')
export class CatsController {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }
}

 */