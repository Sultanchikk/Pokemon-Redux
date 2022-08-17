import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPokemonSpecies } from '../../store/slices/pokemonSliceSpecies';
import { useSelector, useDispatch } from 'react-redux';

import './Catalog.css';

// Components
import Sort from '../../components/sort/Sort';
import DropDowns from '../../components/DropDowns/DropDowns';
import Pokemon from '../../components/Pokemon/Pokemon';

function Catalog() {
  const { name } = useParams();
  const data = useSelector((state) => state.pokemon.data);
  const [pokemon, setPokemon] = useState(data);
  const dispatch = useDispatch();
  console.log('DATA', data);
  const getPokemon = async () => {
    let newData = [];
    for (let i = 1; i <= 50; i++) {
      newData.push(await dispatch(fetchPokemonSpecies(i)));
    }
    setPokemon(newData);
  };
  console.log('DATA', pokemon);

  useEffect(() => {
    getPokemon(name);
  }, []);

  return (
    <div class="Catalog">
      <div className="razryv" style={{ height: '10px' }}>
        <div class="rounder"></div>
        <img class="line" src="/img/line.png" />
      </div>
      <div className="r-p">
        <Pokemon pokemon={pokemon} />
      </div>
    </div>
  );
}

export default Catalog;
