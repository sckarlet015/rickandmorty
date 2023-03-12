import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import style from './Card.module.css';

function CardFav(props) {
   console.log(props)
   //Función para cambiar de favorito
   function handleFavorite() {
      props.deleteFav(props.id)
   }
   return (
      <div className={style.DivCard}>
         <div className={style.btns}>
            <button className={style.ButtonClose} onClick={handleFavorite}>❤️</button>
         </div>
         <img src={props.image} alt="imagen" />
         <Link to={`rickandmorty/detail/${props.id}`}>
            <h3 >Nombre: {props.name}</h3>
         </Link>
         <h3>Especie:    {props.species}</h3>
         <h3>Genero:   {props.gender}</h3>
      </div>
   );
}
export default CardFav