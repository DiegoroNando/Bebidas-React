
import { z} from "zod"; 'zod'
import { CategoriesApiResponseSchema, searchFilterSchema,} from "../utils/recipe-schema";


export type categories = z.Infer<typeof CategoriesApiResponseSchema>

export type searchFilter = z.infer<typeof searchFilterSchema>