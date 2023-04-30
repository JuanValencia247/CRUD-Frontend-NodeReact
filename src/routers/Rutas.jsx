import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Articulos } from '../components/pages/Articulos'
import { Inicio } from '../components/pages/Inicio'
import { Nav } from '../components/layouts/Nav'
import { Header } from '../components/layouts/Header'
import { Footer } from '../components/layouts/Footer'
import { Crear } from '../components/pages/Crear'
import { Error } from '../components/layouts/Error'
import { Busqueda } from '../components/pages/Busqueda'
import { Articulo } from '../components/pages/Articulo'
import { Editar } from '../components/pages/Editar'
export const Rutas = () => {

  return (
    <BrowserRouter>
    <Header/>
    <Nav/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/articulos' element={<Articulos/>}/>
            <Route path='/crear' element={<Crear/>}/>
            <Route path='/buscar/:busqueda' element={<Busqueda/>}/>
            <Route path='/articulo/:id' element={<Articulo/>}/>
            <Route path='/editar/:id' element={<Editar/>}/>

            <Route path='*' element={<Error/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
