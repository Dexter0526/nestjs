import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    // @Get("search")
    // search(@Query("year") searchingYear: string){
    //     return `We are searching for a movie made after: ${searchingYear}`;
    // }

    @Get(":id")
    getOne(@Param("id") movieId: number): Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    createMovie(@Body() movieData: CreateMovieDto){
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    deleteMovie(@Param("id") movieId: number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    updateMovie(@Param("id") movieId: number, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }


}
