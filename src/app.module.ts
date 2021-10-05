import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MainController } from './main/main.controller';

@Module({
  imports: [],
  controllers: [MoviesController, MainController],
  providers: [MoviesService],
})
export class AppModule {}
