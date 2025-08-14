import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"


type Category={}

export type RecipesSliceType = {
    categories:Category[]
    fetchCategories: () => Promise<void>
}

export const CreateRecipeSlice :StateCreator <RecipesSliceType> = () => ({
    categories:[],
    //accion
    fetchCategories: async ()=>{
        getCategories()
    }
})