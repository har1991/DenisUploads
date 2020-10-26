import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RecipeEntity } from './entities/recipe.entity';
import { RecipeService } from './recipe.service';
import { RecipeDto } from './recipeDto';

@Controller('recipe')
export class RecipeController {
    constructor(private recipe_service: RecipeService) { }

    @Get()
    async get_all_recipes(): Promise<RecipeEntity[]> {
        return this.recipe_service.get_recipes();

    }


    @Get(':id')
    async get_recipe_by_id(
        @Param('id', ParseIntPipe) id: number): Promise<RecipeEntity> {
        console.log(id)
        return await this.recipe_service.get_recipe_by_id(id);
    }


    @Delete(':id')
    delete_recipe(@Param('id', ParseIntPipe) id: number) {
        return this.recipe_service.delete_recipe(id);
    }

    @Post()

    async add_recipe(@Body() recipe_dto:RecipeDto): Promise<RecipeEntity> {

        return await this.recipe_service.add_recipe(recipe_dto);
    }

    @Patch(':id')
    async update_recipe(
    @Body() update_recipe:RecipeDto,
    @Param('id',ParseIntPipe)id:number){
        return await this.recipe_service.update_recipe(id ,update_recipe );
    }

}
