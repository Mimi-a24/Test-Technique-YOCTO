import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger: ['log', 'error', 'warn', 'debug']});
  const config = new DocumentBuilder()
  .setTitle('Ticket')
  .setDescription('This is a little API to minipulate Tickets')
  .setVersion('1.0')
  .addTag('Tickets')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
