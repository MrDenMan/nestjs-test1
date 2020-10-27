
import { Controller, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class CalcService {
  constructor(private readonly elasticsearchService: ElasticsearchService, @Inject(WINSTON_MODULE_PROVIDER) private readonly winston: Logger) {}

  add(a: number, b: number): number {
    //console.log(this.winston);

    this.elasticsearchService.bulk({
      refresh: true,
      body: [
        // operation to perform
        { index: { _index: 'game-of-thrones' } },
        // the document to index
        {
          character: 'Ned Stark',
          quote: 'Winter is coming.'
        },

        { index: { _index: 'game-of-thrones' } },
        {
          character: 'Daenerys Targaryen',
          quote: 'I am the blood of the dragon.'
        },

        { index: { _index: 'game-of-thrones' } },
        {
          character: 'Tyrion Lannister',
          quote: 'A mind needs books like a sword needs a whetstone.'
        }
      ]
    })
    this.elasticsearchService.search({
      index: 'game-of-thrones',
      body: {
        query: {
          match: {
            quote: 'winter'
          }
        }
      }
    }, {
      asStream: true
    })

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