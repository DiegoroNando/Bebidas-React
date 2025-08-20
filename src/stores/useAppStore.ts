import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { CreateRecipeSlice, type RecipesSliceType } from './recipeSlice'
import { CreateFavoritesSlice, type favoriteSliceType } from './favoritesSlice'


    export const useAppStore = create <RecipesSliceType & favoriteSliceType>()(devtools ((...a)=> ({
        ...CreateRecipeSlice(...a),
        ...CreateFavoritesSlice(...a)
    })))