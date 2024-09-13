import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); 
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  // adding rate limitter
  await app.listen(3000);
}
bootstrap();
