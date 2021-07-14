import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PublicationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
