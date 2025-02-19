import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Task Management System')
    .setDescription(
      'The Task Management System API description. The Task Management System API allows you to create, read, update, and delete tasks.',
    )
    .setVersion('1.0')
    .addTag('tasks', 'Operations related to tasks')
    .addServer(`http://localhost:${process.env.PORT}`, 'Local Server')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const swaggerCustomOptions = {
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.10.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
  };

  SwaggerModule.setup(`/`, app, document, swaggerCustomOptions);
}
