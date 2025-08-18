import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'



export default function Header() {

  const [searchFilter, setSearchFilter]= useState({
        ingredient:'',
        category:''
  })

   const fetchCategories= useAppStore ((state)=> state.fetchCategories)
   const categories= useAppStore((state)=> state.categories)
  const searchRecipes= useAppStore((store)=>store.searchRecipes)


  const {pathname}= useLocation()
  const isHome = useMemo(() => pathname === '/' ,[pathname])


  useEffect(()=> {
      fetchCategories()
  },[])


  const handleChange=(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
    setSearchFilter({
      ...searchFilter,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    if (Object.values(searchFilter).includes('')) {
      console.log('Todos los campos son obligatorios')
      return
    }

    //consultar las recetas
    searchRecipes(searchFilter)
  }

  return (
    <header className={isHome ? 'haderImage bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16 ">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="lotipo" />
                </div>
                <nav className='flex gap-4'>
                    <NavLink 
                    to="/"
                    className={({isActive})=>
                        isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }>inicio</NavLink>
                    <NavLink 
                    to="/favoritos"
                    className= {({isActive})=>
                      isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }>Favoritos</NavLink>
                </nav>
            </div>
            {isHome &&(
                <form 
                className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow-lg space-y-6'
                onSubmit={handleSubmit}
                >
                    <div className='space-y-4'> 
                      <label 
                      className='block text-white uppercase font-extrabold text-lg '
                      htmlFor="ingredient"
                      >Nombre o Ingredientes</label>
                      <input
                       id='ingredient' 
                      type="text" 
                      name='ingredient'
                      className='p-3 w-full rounded-lg focus: outline-none bg-white'
                      placeholder='Nombre o ingrediente.Ej. Tequila, Vodka, Cafe'
                      onChange={handleChange}
                      value={searchFilter.ingredient}
                      />
                    </div>

                      <div className='space-y-4'> 
                      <label 
                      className='block text-white uppercase font-extrabold text-lg '
                      htmlFor="category"
                      >Categoria</label>
                      <select 
                       id='category' 
                      name='category'
                      className='p-3 w-full rounded-lg focus: outline-none bg-white'
                      onChange={handleChange}
                      value={searchFilter.category}
                      >
                        <option value="">--Seleccione--</option>
                          {categories.drinks.map(category =>(
                            <option
                            value={category.strCategory}
                            key={category.strCategory}
                            >
                              {category.strCategory}
                            </option>
                          ))}
                      </select>
                    </div>
                    <input 
                    type="submit"
                    value='Buscar Receta'
                    className='cursor-pointer bg-orange-600 hover:bg-orange-700 p-2 w-full rounded-lg text-white'
                      />
                </form>
            )}
        </div>
    </header>
  )
}
