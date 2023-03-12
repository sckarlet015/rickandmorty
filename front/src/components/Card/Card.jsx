import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import style from './Card.module.css';

function Card(props) {
    //Estado local
    const [isFav, setIsFav] = React.useState(false);
    //Función para cambiar de favorito
    function handleFavorite(){
        if(isFav === true){
           setIsFav(false)
           props.deleteFav(props.id) 
        } else {
           setIsFav(true)
           props.postFav(props.id)
        }
     }
    return (
        <div className={style.DivCard}>
           <div className={style.btns}>
              <button className={style.ButtonClose} onClick={() => props.onClose(props.id)}>X</button>
              {isFav ? (<button onClick={handleFavorite} className={style.fav}>❤️</button>) : (<button onClick={handleFavorite} className={style.fav}>🤍</button>)}
           </div>
           <img  src={props.image} alt="imagen" />
           <Link to={`rickandmorty/detail/${props.id}`}>
           <h3 >Nombre: {props.name}</h3>
           </Link>
           <h3>Especie:    {props.species}</h3>
           <h3>Genero:   {props.gender}</h3>
        </div>
     );
}

export default Card