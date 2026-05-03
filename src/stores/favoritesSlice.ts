import {type StateCreator} from 'zustand'
import type { Recipe } from '../types'
import { CreateRecipeSlice, RecipesSliceType } from './recipeSlice'
import { CreateNotificationSlice } from './notificationSlice'



export type favoriteSliceType={
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    FavoriteExist: (id: Recipe['idDrink']) => boolean

}

export const CreateFavoritesSlice : StateCreator<favoriteSliceType>= (set, get)=>({
    favorites:[],
    handleClickFavorite:(recipe)=> {
        if(get().FavoriteExist(recipe.idDrink)){
            set((state)=>({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            CreateNotificationSlice().showNotification({
                text:'Se elimino de favoritos',
                error: false
            })
        }else{
            set((state)=>({
                favorites:[...state.favorites, recipe]
            }))
            CreateNotificationSlice().showNotification({
                text: 'Se agrego a favoritos',
                error: false
            })
        }
        
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    FavoriteExist:(id)=>{
        return get().favorites.some(favorite => favorite.idDrink=== id)
    },


    
})