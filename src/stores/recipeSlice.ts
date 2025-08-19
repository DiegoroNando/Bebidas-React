import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
import { type categories, type Drinks, type searchFilter } from "../types"



export type RecipesSliceType = {
    categories:categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: searchFilter) => Promise<void>
}

export const CreateRecipeSlice :StateCreator <RecipesSliceType> = (set) => ({
    categories:{
        drinks:[]
    },
    drinks:{
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
       const drinks= await getRecipes(filters)
            set({
                drinks
            })
    }



})