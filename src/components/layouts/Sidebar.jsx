import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../sass/sidebar.scss'

export const Sidebar = () => {

  const [buscar, setBuscar] = useState('');
  const navegar = useNavigate();

  const hacerBusqueda = (e) => {
    e.preventDefault()
    let miBusqueda = e.target.search.value;
    navegar('/buscar/' + miBusqueda, { replace: true })
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__card'>
        <p className='sidebar__card-buscar'>Buscar</p>
        <form className='sidebar__card-form' onSubmit={hacerBusqueda}>
          <input className='sidebar__card-input' type="text" name='search' placeholder='Search' />
          <button className='sidebar__card-btn'>Buscar</button>
        </form>
      </div>
      <div className='sidebar__publicidad'>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1743967231009301"
          crossOrigin="anonymous"></script>

        <ins className="adsbygoogle"
          style={{display:'block'}}
          data-ad-client="ca-pub-1743967231009301"
          data-ad-slot="6094182167"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        </script>
      </div>
      <div className='sidebar__categoria'>
        <h2 className='sidebar__categoria-title'>Categorias</h2>
        <ul>
          <li><a href="#">Belleza</a></li>
          <li><a href="#">Buenestar</a></li>
          <li><a href="#">Determatologia</a></li>
          <li><a href="#">Dietas</a></li>
          <li><a href="#">Ejercicios</a></li>

        </ul>
      </div>
    </div>
  )
}
