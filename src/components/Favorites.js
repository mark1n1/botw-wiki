import React from 'react';
import { CardGroup } from 'semantic-ui-react';
import CardFavoriteItem from './CardFavoriteItem';

function Favorites({ favorites, handleFavoriteDeleted, filter }) {
  function handleFavoritesData() {
    if(filter) return favorites.filter((favorite) => favorite.name.toLowerCase().includes(filter.toLowerCase()));

    return favorites;
  }

  return (
    <CardGroup itemsPerRow={6}>
      {handleFavoritesData().map((favorite) => (
        <CardFavoriteItem 
          key={ favorite.id }
          id={ favorite.id }
          image={ favorite.image }
          name={ favorite.name }
          description={ favorite.description }
          commonLocations={ favorite.commonLocations }
          onFavoriteDeleted={ handleFavoriteDeleted }
        />
      ))}
    </CardGroup>
  );
}

export default Favorites;