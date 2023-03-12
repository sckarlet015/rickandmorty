import CardFav from '../CarsFav/CardFav';
import {useEffect} from 'react'

export function Favorites(props){
    const {arrayfavoritos} = props;
    console.log(props)

    useEffect(()=>{
     props.misFavoritos()
    },[])
    return(
        <div>
        {arrayfavoritos && arrayfavoritos.map(fav => (
            <CardFav
            name={fav.name}
            id={fav.id}
            key={fav.id}
            gender={fav.gender}
            image={fav.image}
            deleteFav = {props.deleteFav}
            misFavoritos = {props.misFavoritos}
            />
        ))}
        </div>
    )
}
export default Favorites