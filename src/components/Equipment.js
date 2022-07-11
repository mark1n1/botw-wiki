import React from 'react';
import { CardGroup } from 'semantic-ui-react'
import CardItem from './CardItem';

function Equipment({ items, filter }) {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
  //     .then(r => r.json())
  //     .then(items => setItems(items.data));
  // }, []);

  function handleEquipmentData() {
    if(filter) return items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

    return items;
  }

  return (
    <div>
      <CardGroup itemsPerRow={6}>
        {handleEquipmentData().map((item) => (
          <CardItem 
            key={ item.id }
            image={ item.image }
            name={ item.name }
            description={ item.description }
            commonLocations={ item.common_locations }
          />
        ))}
      </CardGroup>
    </div>
  )
}

export default Equipment;