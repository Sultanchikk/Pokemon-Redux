import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPokemon } from '../../store/slices/pokemonSlice';
import { useSelector, useDispatch } from 'react-redux';
import './PokemonAbilities.css';
// MUI Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PokemonAbilties() {
  const { name } = useParams();

  const data = useSelector((state) => state.pokemon.data);
  console.log('DATA', data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon(name));
  }, []);

  return (
    <div className="help">
      <div className="back d-flex">
        <Link to="/" style={{ color: '#000' }}>
          <ArrowBackIcon />
        </Link>
        <Link style={{textDecoration: 'none'}} to={"/"}><p className="backItem">Вернуться в каталог</p></Link>
      </div>
      <div className="pokemonDatails">
        <div className="datails">
          <p>
            <b>{data?.[0]?.name.toUpperCase()}</b> -{' '}
            {data?.[1]?.flavor_text_entries?.[0]?.flavor_text}
            <br />
            {data?.[1]?.flavor_text_entries?.[2]?.flavor_text}
          </p>
          <br />

          <p>
            {data?.[1]?.flavor_text_entries?.[3]?.flavor_text}{' '}
            <span className="red">{data?.[1]?.flavor_text_entries?.[4]?.flavor_text}</span>
            {data?.[1]?.flavor_text_entries?.[5]?.flavor_text}
            <br />
            <span className="red">{data?.[1]?.flavor_text_entries?.[6]?.flavor_text}</span>{' '}
            {data?.[1]?.flavor_text_entries?.[7]?.flavor_text}
          </p>
          <br />

          <p>
            {data?.[1]?.flavor_text_entries?.[8]?.flavor_text}{' '}
            <span className="red">{data?.[1]?.flavor_text_entries?.[9]?.flavor_text}</span> и{' '}
            <span className="red">{data?.[1]?.flavor_text_entries?.[10]?.flavor_text}</span>
            {data?.[1]?.flavor_text_entries?.[11]?.flavor_text}
            <br />
            {data?.[1]?.flavor_text_entries?.[1
            ]?.flavor_text}
          </p>
        </div>
      </div>
      <div className="content">
        <h2 className="contentTitle">Содержание</h2>
        <ul className="contentItems">
          <li className="contentItem">1. Внешность</li>
          <li className="contentItem">2. Характер</li>
          <li className="contentItem">3. Способности</li>
          <li className="contentItem">4. Обитание</li>
          <li className="contentItem">5. В аниме</li>
          <li className="contentItem">6. Эволюция</li>
        </ul>
      </div>
      <div className="surface">
        <h3 className="surfaceTitle">Внешность</h3>
        <div className="surfaceDatails">
          <p>
          {data?.[1]?.flavor_text_entries?.[13]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[14]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[15]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[20]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[26]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[27]?.flavor_text}
          </p>
        </div>
      </div>
      <div className="character">
        <h3 className="characterTitle">Характер</h3>
        <div className="characterDatails">
          <p>
          {data?.[1]?.flavor_text_entries?.[27]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[34]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[35]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[67]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[43]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[1]?.flavor_text}
            <br />
            <p className="mt-30">
            {data?.[1]?.flavor_text_entries?.[45]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[35]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[38]?.flavor_text}
              <span className="red">{data?.[1]?.flavor_text_entries?.[2]?.flavor_text}</span>.
            </p>
          </p>
        </div>
      </div>
      <div className="capabilities">
        <h3 className="capabilitiesTitle">Способности</h3>
        <div className="capabilitiesDatails">
          <p>
          {data?.[1]?.flavor_text_entries?.[13]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[15]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[26]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[43]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[31]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[12]?.flavor_text}
          {data?.[1]?.flavor_text_entries?.[49]?.flavor_text}
            <br />
            <p className="mt-30">
            {data?.[1]?.flavor_text_entries?.[48]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[46]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[34]?.flavor_text}
            </p>
          </p>
        </div>
      </div>
      <div className="pokemon" key={data.id}>
        <img
          width={400}
          height={400}
          src={data?.[0]?.sprites?.other?.dream_world?.front_default}
          alt="Pokemon"
        />
        <h4 className="pokemonName">{data?.[0]?.name}</h4>
      </div>
    </div>
  );
}

export default PokemonAbilties;
