import { useEffect, useMemo } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'


export default function Header() {

   const fetchCategories= useAppStore ((state)=> state.fetchCategories)

  const {pathname}= useLocation()
  const isHome = useMemo(() => pathname === '/' ,[pathname])


  useEffect(()=> {
      fetchCategories()
  },[])

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
                <form className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow-lg space-y-6'>
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
                      />
                    </div>

                      <div className='space-y-4'> 
                      <label 
                      className='block text-white uppercase font-extrabold text-lg '
                      htmlFor="ingredient"
                      >Categoria</label>
                      <select 
                       id='ingredient' 
                      name='ingredient'
                      className='p-3 w-full rounded-lg focus: outline-none bg-white'
                      >
                        <option value="">--Seleccione--</option>
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
