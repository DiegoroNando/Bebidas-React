import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps ={
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps) {
      
      const selectRecipe = useAppStore((store)=>store.selectRecipe)

  return (
        <div className="mt-15 shadow-lg">
            <div className="overflow-hidden">
                <img 
                src={drink.strDrinkThumb} 
                alt={`Imagen de ${drink.strDrinkThumb}`}
                className="hover:scale-125 transition-transform hover:rotate-2 "
                />
            </div>

            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                type="button"
                className="bg-orange-400 hover:bg-orange-500 w-full mt-5 p-3 text-white text-lg font-bold"
                onClick={()=>selectRecipe(drink.idDrink)}
                >Ver Receta</button>
            </div>
        </div>
  )
}
