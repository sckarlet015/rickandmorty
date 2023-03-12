import Card from '../Card/Card.jsx';
import style from './Cards.module.css';
import { useState} from 'react';

export default function Cards(props) {
   const [currentPage, setCurrentPage] = useState(1);
   const { characters } = props
   const handlePreviousPage = () => {
      setCurrentPage(currentPage - 1);
   };
   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
   };
   const pageSize = 10;
   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;
   return (
      <div className={style.DivCards}>
         {characters && characters.slice(startIndex, endIndex).map(ele => (
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
         <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
               Anterior
            </button>
            <button
               onClick={handleNextPage}
            // disabled={endIndex >= characters.length}
            >
               Siguiente
            </button>
         </div>
      </div>
   );
}



