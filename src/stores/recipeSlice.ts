import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
import { type categories, type searchFilter } from "../types"



export type RecipesSliceType = {
    categories:categories
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: searchFilter) => Promise<void>
}

export const CreateRecipeSlice :StateCreator <RecipesSliceType> = (set) => ({
    categories:{
        drinks:[]
    },
    //accion
    fetchCategories: async ()=>{
       const categories = await getCategories()
            set({
                categories
            })
        },

    searchRecipes: async(filters)=>{
        await getRecipes(filters)
    }



})