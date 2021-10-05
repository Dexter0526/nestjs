import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("search")
    search(@Query("year") searchingYear: String){
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get(":id")
    getOne(@Param("id") movieId: String){
        return `This will return one movie whit the id: ${movieId}`;
    }

    @Post()
    createMovie(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete("/:id")
    deleteMovie(@Param("id") movieId: String){
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch("/:id")
    updateMovie(@Param("id") movieId: String, @Body() updateData){
        return {
            updateMovie: movieId,
            updateData
        };
    }


}
