import { Controller, Get, Query, Req } from '@nestjs/common';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
  constructor(private readonly service: CalcService) {}

  @Get('add')
  add(@Query() query: any) : number {
    const { a, b } = query;
    return this.service.add(Number(a), Number(b))
  }
}
