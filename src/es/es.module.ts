import { DynamicModule, Module, Provider } from '@nestjs/common';
import { EsService } from './es.service';
import { ELASTICSEARCH_MODULE_OPTIONS } from './elasticsearch.constants';
import {
  ElasticsearchModuleAsyncOptions,
  ElasticsearchModuleOptions,
  ElasticsearchOptionsFactory
} from './interfaces/elasticsearch-module-options.interface';

//import { ElasticsearchModule } from 'elasticsearch';
//import {Ela from 'elasticsearch';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticsearchService } from '@nestjs/elasticsearch';
@Module({
  imports: [ElasticsearchModule.register({
    node: 'http://localhost:9200',
  })],
  providers: [],
  exports: [ElasticsearchModule],
})
export class EsModule {

  static register(options: ElasticsearchModuleOptions): DynamicModule {
    return {
      module: ElasticsearchModule,
      providers: [{ provide: ELASTICSEARCH_MODULE_OPTIONS, useValue: options }]
    };
  }
  static registerAsync(
    options: ElasticsearchModuleAsyncOptions
  ): DynamicModule {
    return {
      module: ElasticsearchModule,
      imports: options.imports || [],
      providers: [...this.createAsyncProviders(options)]
    };
  }
  private static createAsyncProviders(
    options: ElasticsearchModuleAsyncOptions
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass
      }
    ];
  }

  private static createAsyncOptionsProvider(
    options: ElasticsearchModuleAsyncOptions
  ): Provider {
    if (options.useFactory) {
      return {
        provide: ELASTICSEARCH_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || []
      };
    }
    return {
      provide: ELASTICSEARCH_MODULE_OPTIONS,
      useFactory: async (optionsFactory: ElasticsearchOptionsFactory) =>
        await optionsFactory.createElasticsearchOptions(),
      inject: [options.useExisting || options.useClass]
    };
}}
