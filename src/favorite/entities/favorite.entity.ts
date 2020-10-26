import { RecipeEntity } from "src/recipe/entities/recipe.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('favorite')
export class FavoriteEntity {
    @PrimaryGeneratedColumn()
    id : number ;
    
    @Column()
    time : Date  ; 

    @ManyToOne(
        type => RecipeEntity,
        (recipe) => recipe.favorites)
        @JoinColumn()
    recipe: RecipeEntity;

    @ManyToOne(
        type => UserEntity,
        (users) => users.favorites)
        @JoinColumn()
    users: UserEntity;


}
