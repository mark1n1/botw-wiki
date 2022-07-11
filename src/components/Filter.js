import React from 'react';
import { Input } from 'semantic-ui-react'

function Filter({ onFilterChange }) {

  return (
    <center>
      <Input 
        className="prompt center-block" 
        onChange={ (e) => onFilterChange(e.target.value) }
        placeholder="Filter..."
      />
    </center>
  );
}

export default Filter;