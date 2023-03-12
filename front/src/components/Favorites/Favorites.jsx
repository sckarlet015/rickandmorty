import CardFav from '../CarsFav/CardFav';
import { useEffect } from 'react';

export function Favorites(props) {
  const { arrayfavoritos } = props;

  useEffect(() => {
    props.misFavoritos();
  }, []);

  return (
    <div>
      {arrayfavoritos && arrayfavoritos.length > 0 ? (
        arrayfavoritos.map((fav) => (
          <CardFav
            name={fav.name}
            id={fav.id}
            key={fav.id}
            gender={fav.gender}
            image={fav.image}
            deleteFav={props.deleteFav}
          />
        ))
      ) : (
        <div>
          <h2>No found</h2>
        </div>
      )}
    </div>
  );
}

export default Favorites;