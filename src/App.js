import './App.css';
import React from 'react';
import 'macro-css';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Catalog from './pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import PokemonAbilities from './pages/PokemonAbilities/PokemonAbilities';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/pokemon/:name" element={<PokemonAbilities />} />
        {/* <Route path='/pokemon' element={<PokemonPage />}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
