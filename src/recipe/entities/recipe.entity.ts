import { RecipeEnumDifficulty } from "src/enums/difficulty-enum";
import { FavoriteEntity } from "src/favorite/entities/favorite.entity";
import { ImageEntity } from "src/image/entities/image.entity";
import { IngredientEntity } from "src/ingredient/entities/ingredient.entity";
import { LineIngredientEntity } from "src/line-ingredient/entities/line-ingredient.entity";
import { RecipeBookEntity } from "src/recipe-book/entities/recipe-book.entity";
import { StarsEntity } from "src/stars/entities/stars.entity";
import { TagEntity } from "src/tag/entities/tag.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipe')
export class RecipeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column()
    description: string;

    @Column()
    time_preparation: number;

    @Column()
    time_cocking: number;

    @Column({ type: 'enum', enum: RecipeEnumDifficulty, default: RecipeEnumDifficulty.Average })
    difficulty: RecipeEnumDifficulty;

    @Column({ default: true })
    private: boolean;

    @Column({ default: false })
    waiting_for_validation: boolean;

    @Column({ default: false })
    published: boolean;

    @ManyToOne(
        type => UserEntity,
        (users) => users.recipes)
    @JoinColumn()
    users: UserEntity;

    @OneToMany(type => StarsEntity,
        (stars) => stars.recipes)

    stars: StarsEntity;

    @ManyToMany(type => TagEntity, tags => tags.recipe)
    tags: TagEntity[];



    @OneToMany(type => ImageEntity,
        (images) => images)

    images: ImageEntity;


    @OneToMany(type => FavoriteEntity,
        (favorites) => favorites)

    favorites: FavoriteEntity;

    @OneToMany(type => RecipeBookEntity,
        (recipe_book) => recipe_book)

    recipe_book: RecipeBookEntity;


    @OneToMany(type => LineIngredientEntity,
        (line_engriedient) => line_engriedient)

    line_engriedient: LineIngredientEntity;

}
