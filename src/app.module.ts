import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [MainController],
  providers: [],
})
export class AppModule {}
