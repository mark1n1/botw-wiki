import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import Description from './Description';

function CardItem(props) {
  const { id, image, name, description, commonLocations, drops, favorites } = props;

  function onAddFavoriteClick(props) {
    const formData = {
      id: id,
      image: image,
      name: name,
      description: description,
      commonLocations: commonLocations
    }

    fetch('http://localhost:8000/favorites', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => {
        //not sure if this is the best way to handle duplicates
        if(r.ok) {
          alert('Item added to favorites!');
          return r.json()
        }
        alert('Item is already in Favorites');
        throw new Error('something went wrong');
      })
      .then(item => props.handleAddFavoriteClick(item))
      .catch(err => {
        console.log(err);
      });
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
            <Icon className="clickable" color='red' name='heart' onClick={() => onAddFavoriteClick(props)}/>
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

export default CardItem;