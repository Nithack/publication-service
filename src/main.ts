import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
async function bootstrap() {
  const logger = new Logger('Main Publication Service');
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  await app.listen(3000, () => {
    logger.log('Server Listem http://localhost:3000');
  });
}
bootstrap();
