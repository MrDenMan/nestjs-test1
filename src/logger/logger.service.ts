import { Logger, Inject, Injectable, Scope } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import * as winston from 'winston';


@Injectable({ scope: Scope.TRANSIENT })
/*export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}
}*/
export class Winston extends Logger {
   constructor(
     @Inject(WINSTON_MODULE_PROVIDER)
     private readonly logger: winston.Logger,
   ) {
     super()
   }
/*
   info(message: string, context?: string): void {
     this.logger.info(message, { context });
     super.log(message, context);
   }*/

   debug(message: string, context?: string): void {
     this.logger.debug(message, { context });
     super.debug(message);
   }


   error(message: string, trace: string, context?: string): void {
     this.logger.error(message, { context });
     super.error(message, context);
   }

  log(message: string, context?: string): void {

    this.logger.log(message, { context });
    super.log(message);
  }
  verbose(message: string, context?: string): void {
    this.logger.log(message, { context });
    super.verbose(message);
    /* your implementation */
  }

  warn(message: string, trace: string, context?: string): void {
    this.logger.warn(message, { context });
    super.warn(message);
  }


  //this.ElasticsearchService
}