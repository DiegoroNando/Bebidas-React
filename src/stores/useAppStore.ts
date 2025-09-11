import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { CreateRecipeSlice, type RecipesSliceType } from './recipeSlice'
import { CreateFavoritesSlice, type favoriteSliceType } from './favoritesSlice'
import { CreateNotificationSlice, type NotificationSliceType} from './notificationSlice'


    export const useAppStore = create <RecipesSliceType & favoriteSliceType & NotificationSliceType>()(devtools ((...a)=> ({
        ...CreateRecipeSlice(...a),
        ...CreateFavoritesSlice(...a),
        ...CreateNotificationSlice(...a)
    })))