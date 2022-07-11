import React from 'react';
import CardItem from './CardItem';
import { CardGroup } from 'semantic-ui-react';

function Monsters({ monsters, filter }) {
  // const [monsters, setMonsters] = useState([]);

  // useEffect(() => {
  //   fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
  //     .then(r => r.json())
  //     .then(monsters => setMonsters(monsters.data));
  // }, []);

  function handleMonstersData() {
    if(filter) return monsters.filter((monster) => monster.name.toLowerCase().includes(filter.toLowerCase()));

    return monsters;
  }

  return (
    <CardGroup itemsPerRow={6}>
      {handleMonstersData().map((monster) => (
        <CardItem 
          key={ monster.id }
          image={ monster.image }
          name={ monster.name }
          description={ monster.description }
          commonLocations={ monster.common_locations }
          drops={ monster.drops }
        />
      ))}
    </CardGroup>
  )
}

export default Monsters;