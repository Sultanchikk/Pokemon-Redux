
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pokemon.css'
import Sort from './../sort/Sort';
import DropDowns from '../DropDowns/DropDowns';
import Loading from '../../components/Loader/Loader'
function Pokemon({ pokemon }) {

  const [data, setData] = useState(pokemon)
  const [loading, setLoading] = useState(true)


  const sortByPopularity = (col) => {
      const sorted = [...data].sort((a, b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted)
  }

  const sortByRatings = (col) => {
    const sorted = [...data].sort((a, b) =>
    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
    setData(sorted)
}


  useEffect(() => {
      setData(pokemon)
      setTimeout(() => {
        setLoading(false)
      }, 3000);
  }, [pokemon])
  
  console.log('SHIT', pokemon);
  console.log('DATA', data);

  


  return (
    <div>
      <DropDowns sortByPopularity={sortByPopularity} />
      <Sort sortByPopularity={sortByPopularity} />
          <div style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
            <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => sortByPopularity('type')}>Популярности</a>
            <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => sortByRatings('type')}>Рейтингу</a>
            <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => sortByPopularity('type')}>Силу</a>
          </div>
      {loading ?
      <Loading />
      :
      <div className="pokemonCard">
      {data?.map((p) => (
        <div className="card" key={p.payload.id}>
          <Link to={`pokemon/${p.payload.name}`}>
            <img className='pokemonImg' width={300} height={300} src={p.payload.sprites.other.dream_world.front_default} alt="Hello" />
          </Link>
          <Link style={{textDecoration: 'none'}} to={`/pokemon/${p.payload.name}`}>
            <p className='pokemonName'>{p.payload.name}</p>
          </Link>
        </div>
      ))}
    </div>
      }
    </div>
  );
}

export default Pokemon;
