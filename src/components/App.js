import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react'
import NavBar from './NavBar';
import Equipment from './Equipment';
import Monsters from './Monsters';
import Creatures from './Creatures';
import Filter from './Filter';
import Main from './Main';
import Favorites from './Favorites';

function App() {
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState([]);
  const [creatures, setCreatures] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
      .then(r => r.json())
      .then(items => setItems(items.data));

      fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
        .then(r => r.json())
        .then(creatures => setCreatures(creatures.data.food));

      fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
        .then(r => r.json())
        .then(monsters => setMonsters(monsters.data));

      fetch('http://localhost:8000/favorites')
        .then(r => r.json())
        .then(favorites => setFavorites(favorites));
  }, []);
  
  function handleFilterChange(filter) {
    setFilter(filter);
  }

  function handleAddFavoriteClick(item) {
    setFavorites([...favorites, item]);
  }

  function handleFavoriteDeleted(id) {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);

    setFavorites(updatedFavorites);
  }

  return (
    <div className="App">
      <Header as='h2' attached='top' align='center'>Welcome to the BOTW Wiki</Header>
      <Segment attached align='center'>
        Here you can explore some of the items, creatures and monsters and a
        small description about them.
      </Segment>
      <NavBar />
      <Filter onFilterChange={ handleFilterChange }/>
      <Routes>
        <Route exact path="/equipment" element={<Equipment items={ items } filter={ filter } handleAddFavoriteClick={ handleAddFavoriteClick }/>} />
        <Route exact path="/monsters" element={<Monsters monsters={ monsters } filter={ filter } handleAddFavoriteClick={ handleAddFavoriteClick }/>} />
        <Route exact path="/creatures" element={<Creatures favorites={ favorites } creatures={ creatures } filter={ filter } handleAddFavoriteClick={ handleAddFavoriteClick }/>} />
        <Route exact path="/favorites" element={<Favorites filter={ filter }favorites={ favorites } handleFavoriteDeleted={ handleFavoriteDeleted }/> } />
        <Route exact path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
