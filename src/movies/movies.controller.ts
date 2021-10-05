import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string){
        return `This will return one movie whit the id: ${movieId}`;
    }

    @Post()
    createMovie(){
        return "This will create a movie";
    }

    @Delete("/:id")
    deleteMovie(@Param("id") movieId: string){
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch("/:id")
    updateMovie(@Param("id") movieId: String){
        return `This will update a movie with the id: ${movieId}`;
    }
}
