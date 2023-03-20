import { Module } from '@nestjs/common';
import { CatsModule } from './services/cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
