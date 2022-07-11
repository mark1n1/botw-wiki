import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import Description from './Description';

function CardItem(props) {
  const { image, name, description, commonLocations, drops } = props;

  function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };

  return (
    <Card>
      <Image src={ image }/>
      <Card.Content>
        <Card.Header><center>{ capitalizeWords(name) }</center></Card.Header>
        <Card.Meta>
          {/* <span className='date'>{ description }</span> */}
        </Card.Meta>
      </Card.Content>
      {/* <Modal 
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>More Info</Button>}
      >
        <Modal.Header>{ capitalizeWords(name) }</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={ image } wrapped />
          <Modal.Description>
            <Header>Description</Header>
            <p>{ description }</p>
            { commonLocations ? <Header as='h4'>Common Locations</Header> : ""}
            { commonLocations ? <List bulleted>
                                  {commonLocations.map((location, index) => (
                                    <List.Item key={ index }>{ location }</List.Item>
                                  ))}
                                </List> 
                                : null}
              
            { drops ? <Header as='h4'>Drops</Header> : ""}
            { drops ? <List bulleted>
                        { drops.map((drop, index) => (
                          <List.Item key={ index }>{ drop }</List.Item>
                        )) }
                      </List> 
                        : null}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Ok"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal> */}
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