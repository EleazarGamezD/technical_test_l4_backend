import { corsConfig } from '@core/config/cors/cors.config';
import { setupSwagger } from '@core/config/swagger/swagger';
import { AllExceptionsFilter } from '@core/exceptions-filters/exception-filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('l4 ventures Task Management System');

  // Use global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      disableErrorMessages: false,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Increase the limit to 50mb
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // Enable CORS
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors(corsConfig);
  }

  // Set global prefix
  app.setGlobalPrefix(`api`);

  // Use global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());

  // Configure Swagger
  setupSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`App Running on port ${process.env.PORT}`);
}
bootstrap();
