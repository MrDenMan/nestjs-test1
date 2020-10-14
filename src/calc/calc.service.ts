
import { Controller, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class CalcService {
  constructor(private readonly elasticsearchService: ElasticsearchService, @Inject(WINSTON_MODULE_PROVIDER) private readonly winston: Logger) {}

  add(a: number, b: number): number {
    //console.log(this.winston);

    this.elasticsearchService.search({
      index: 'my-index',
      body: {
        query: {
          match: { hello: 'world' }
        }
      }
    }, (err, result) => {
      if (err) console.log(err)
    })
    this.winston.warn(`arguments: a - ${a}, b - ${b}`, 'trtrsggdf');
   // console.log("calc service : "+this.winston.warn(`arguments: a - ${a}, b - ${b}`, 'trtrsggdf'));
    this.winston.error(`arguments: a - ${a}, b - ${b}`, 'trtrsggdf');
    this.winston.verbose(`arguments: a - ${a}, b - ${b}`, 'trtrsggdf');
   // this.winston.log('log', 'trtrsggdf');
    this.winston.debug(`arguments: a - ${a}, b - ${b}`, 'trtrsggdf');
    //this.winston.info(`arguments: a - ${a}, b - ${b}`);

    return a + b
  }


}