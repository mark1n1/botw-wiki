import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'
import Description from './Description';

function CardFavoriteItem(props) {
  const { id, image, name, description, commonLocations, drops } = props;

  function onDeleteFavoriteClick(props) {
    fetch(`http://localhost:8000/favorites/${ id }`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(() => props.onFavoriteDeleted(id));
  }

  function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };

  return (
    <Card>
      <Image src={ image }/>
      <Card.Content>
        <Card.Header>
          <center>{ capitalizeWords(name) }</center>
          <center>
            <Icon className="clickable" color='blue' name='trash' onClick={() => onDeleteFavoriteClick(props)}/>
          </center>
        </Card.Header>
        <Card.Meta>
          {/* <span className='date'>{ description }</span> */}
        </Card.Meta>
      </Card.Content>
      <Description 
        image={ image } 
        name={ name }
        description={ description }
        commonLocations={ commonLocations }
        drops={ drops }
      />
    </Card>
  )
}

export default CardFavoriteItem;