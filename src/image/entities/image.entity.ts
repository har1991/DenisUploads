import { RecipeEntity } from "src/recipe/entities/recipe.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('image')
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id : number ;

    @ManyToOne(
        type => RecipeEntity,
        (recipe) => recipe.images)
        @JoinColumn()
    recipe: RecipeEntity;

}
