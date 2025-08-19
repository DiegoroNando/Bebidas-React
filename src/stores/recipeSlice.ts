import type { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeServices"
import { type categories, type Drink, type Drinks, type Recipe, type searchFilter } from "../types"



export type RecipesSliceType = {
    categories:categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: searchFilter) => Promise<void>
    selectRecipe: (id:Drink['idDrink']) => Promise<void>
    closeModal:() => void
}

export const CreateRecipeSlice :StateCreator <RecipesSliceType> = (set) => ({
    //estados
    categories:{
        drinks:[]
    },
    drinks:{
        drinks:[]
    },
    selectedRecipe:{}as Recipe,
    modal: false,
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
    },

    selectRecipe: async (id)=>{
        const selectedRecipe = await getRecipesById(id)
            set({
                selectedRecipe,
                modal: true
            })
    },

    closeModal:() => {
        set({
            modal:false,
            selectedRecipe: {} as Recipe
        })
    }


})