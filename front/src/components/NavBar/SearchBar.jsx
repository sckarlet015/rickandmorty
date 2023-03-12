import style from './SearchBar.module.css';
import React, { useState } from 'react';

export default function SearchBar(props) {
   //Estado
   const [character, setCharacter] = useState("");
   //Función que ejecuta la busqueda del personaje
   const handleChance = (e) => {
      const { value } = e.target;
      setCharacter(value)
   }

   return (
      <div className={style.search}>
         <input className={style.inp} type='search' onChange={handleChance} placeholder="Personaje..."/>
      <button className={style.btn} onClick={() => props.onSearch(character) }>Agregar</button>
      </div>
   );
}
