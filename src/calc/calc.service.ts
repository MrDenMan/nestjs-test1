import { Injectable } from '@nestjs/common';
import { Winston } from '../logger/logger.service'

@Injectable()
export class CalcService {
  constructor(private winston: Winston,) {
    this.winston.setContext('CalcService');
  }

  add(a: number, b: number): number {
    this.winston.warn(`arguments: a - ${a}, b - ${b}`, 'trtrsggdf');
    this.winston.error(`arguments: a - ${a}, b - ${b}`, 'trtrsggdf');
    this.winston.info(`arguments: a - ${a}, b - ${b}`);
    return a + b
  }
}
