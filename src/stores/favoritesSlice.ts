import {type StateCreator} from 'zustand'
import type { Recipe } from '../types'
import type { RecipesSliceType } from './recipeSlice'
import type { NotificationSliceType } from './notificationSlice'



export type favoriteSliceType={
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    FavoriteExist: (id: Recipe['idDrink']) => boolean

}

export const CreateFavoritesSlice : StateCreator<RecipesSliceType & favoriteSliceType & NotificationSliceType, [], [], favoriteSliceType>= (set, get)=>({
    favorites:[],
    handleClickFavorite:(recipe)=> {
        if(get().FavoriteExist(recipe.idDrink)){
            set((state)=>({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            get().showNotification({
                text:'Se elimino de favoritos',
                error: false
            })
        }else{
            set((state)=>({
                favorites:[...state.favorites, recipe]
            }))
            get().showNotification({
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