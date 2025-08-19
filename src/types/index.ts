
import { z} from "zod"; 
import { CategoriesApiResponseSchema, DrinkAPIResponse, DrinksAPIResponse, searchFilterSchema,} from "../utils/recipe-schema";


export type categories = z.Infer<typeof CategoriesApiResponseSchema>

export type searchFilter = z.infer<typeof searchFilterSchema>

export type Drinks= z.infer<typeof DrinksAPIResponse>

export type Drink = z.infer<typeof DrinkAPIResponse>