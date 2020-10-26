import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeBookEntity } from 'src/recipe-book/entities/recipe-book.entity';
import { Repository } from 'typeorm';
import { RecipeEntity } from './entities/recipe.entity';
import { RecipeDto } from './recipeDto';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(RecipeEntity)
        private recipe_repositry: Repository<RecipeEntity>) { }

        async get_recipes(): Promise<RecipeEntity[]> {
            return await this.recipe_repositry.find()
        }
        async get_recipe_by_id(recipe_id: number): Promise<RecipeEntity> {
            const recipe = await this.recipe_repositry.findOne(recipe_id)
            if (!recipe) {
                console.log('there is no recipe')
                throw new NotFoundException(`Sorry recipe with id :${recipe_id} is not exist `);
                
            }
            else {
                console.log('there is a  recipe', recipe)
                return recipe
            }
        }
        async add_recipe(recipe: RecipeDto) {
    
            return await this.recipe_repositry.save(recipe);
        }
        async delete_recipe(recipe_id: number) {
            const recipe = await this.get_recipe_by_id(recipe_id);
            return await this.recipe_repositry.remove(recipe);
        }
        async update_recipe(id: number, recipe: RecipeDto) {
            const update_recipe = await this.recipe_repositry.preload({  // With (preload) We will get the recipe using it's id and then update  it  
                id,
                ...recipe
            })//verifying whether the recipe we are targeting exist or not
            if (!update_recipe) {
                throw new NotFoundException(`Sorry recipe with id :${id} is not exist `);
            }
            return await this.recipe_repositry.save(update_recipe);
        }
}
