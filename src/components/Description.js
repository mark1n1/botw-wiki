import React, { useState } from "react";
import { Modal, Button, Header, List, Image } from 'semantic-ui-react';

function Description(props) {
  const { image, name, description, commonLocations, drops } = props;
  const [open, setOpen] = useState(false);

  function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };

  return (
    <Modal 
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
    </Modal>
  );
}

export default Description;