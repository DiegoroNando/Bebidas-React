import axios from "axios"
import { CategoriesApiResponseSchema } from "../utils/recipe-schema"
import type { searchFilter } from "../types"


export  async function getCategories (){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
        const result= CategoriesApiResponseSchema.safeParse(data)
            if (result.success) {
                return result.data  
            }
}


export async function getRecipes(filters:searchFilter){
       const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
       const {data}= await axios(url)
       console.log(data)
}