import {z} from 'zod'


export const CategoriesApiResponseSchema = z.object({
    drinks:z.array(
        z.object({
            strCategory:z.string()
        })
    )
})


export const searchFilterSchema = z.object({
        ingredient:z.string(),
        category:z.string()
})

