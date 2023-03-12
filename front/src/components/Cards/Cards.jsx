import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards(props) {
   console.log(props)
   const { characters } = props;
   return <div className={style.DivCards}>
      {characters.map(ele => (
         <Card
         key={ele.name}
         name={ele.name}
         species={ele.species}
         gender={ele.gender}
         image={ele.image}
         id={ele.id}
         onClose={props.onClose}
         postFav={props.postFav}
         deleteFav={props.deleteFav}
         isFav={props.isFav}
         />
      ))}
   </div>;
}