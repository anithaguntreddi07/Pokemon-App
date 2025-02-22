import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListPokemons from './components/ListPokemons';
import AddPokemon from './components/AddPokemon';
import EditPokemon from './components/EditPokemon';
import AddPokemonPage from './components/AddPokemonPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPokemon />} />
          <Route path="/edit/:id" element={<EditPokemon />} />
          <Route path="/list" element={<ListPokemons />} />
          <Route path="/add-pokemon-page" element={<AddPokemonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
