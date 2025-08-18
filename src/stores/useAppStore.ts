import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { CreateRecipeSlice, type RecipesSliceType } from './recipeSlice'


    export const useAppStore = create <RecipesSliceType>()(devtools ((...a)=> ({
        ...CreateRecipeSlice(...a)
    })))