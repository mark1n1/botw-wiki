import React from 'react';
import { CardGroup } from 'semantic-ui-react';
import CardItem from './CardItem';

function Creatures({ creatures, filter }) {
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
          image={ creature.image }
          name={ creature.name }
          description={ creature.description }
          commonLocations={ creature.common_locations }
        />
      ))}
    </CardGroup>
  )
}

export default Creatures;