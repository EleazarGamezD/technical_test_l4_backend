import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@modules/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '@core/config/IConfig/configuration';
import { LoggerModule } from 'nestjs-pino';
import { TaskModule } from '@modules/task/task.module';

@Module({
  imports: [
    DatabaseModule,
    TaskModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
      isGlobal: true,
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        pinoHttp: {
          transport: {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'SYS:standard',
              singleLine: true,
            },
          },
        },
      }),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
