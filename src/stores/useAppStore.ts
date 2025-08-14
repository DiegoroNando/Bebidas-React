import {create} from 'zustand'
import { CreateRecipeSlice, type RecipesSliceType } from './recipeSlice'

    export const useAppStore = create <RecipesSliceType> ((...a)=> ({
        ...CreateRecipeSlice(...a)
    }))