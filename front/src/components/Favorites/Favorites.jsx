import Card from "../Card/Card";
import {useEffect} from 'react'
import axios from "axios";


export function Favorites(props){
    const {arrayfavoritos} = props;
    console.log(props)

    useEffect(()=>{
     props.misFavoritos()
    },[])
    return(
        <div>
        {arrayfavoritos && arrayfavoritos.map(fav => (
            <Card
            name={fav.name}
            id={fav.id}
            key={fav.id}
            gender={fav.gender}
            image={fav.image}
            deleteFav = {props.deleteFav}
            />
        ))}
        </div>
    )
}
export default Favorites