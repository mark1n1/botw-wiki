import React from 'react';
import { CardGroup } from 'semantic-ui-react';
import CardItem from './CardItem';

function Creatures({ creatures, filter, handleAddFavoriteClick, favorites }) {
  // const [creatures, setCreatures] = useState([]);

  // useEffect(() => {
  //   fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
  //     .then(r => r.json())
  //     .then(creatures => setCreatures(creatures.data.food));
  // }, []);
  function handleCreaturesData() {
    if(filter) return creatures.filter((creature) => creature.name.toLowerCase().includes(filter.toLowerCase()));

    return creatures;
  }

  return (
    <CardGroup itemsPerRow={6}>
      {handleCreaturesData().map((creature) => (
        <CardItem 
          key={ creature.id }
          id={ creature.id }
          image={ creature.image }
          name={ creature.name }
          description={ creature.description }
          commonLocations={ creature.common_locations }
          handleAddFavoriteClick={ handleAddFavoriteClick }
          favorites={ favorites }
        />
      ))}
    </CardGroup>
  )
}

export default Creatures;