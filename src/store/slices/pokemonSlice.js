import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const res = 'https://pokeapi.co/api/v2/pokemon/';
const res1 = 'https://pokeapi.co/api/v2/pokemon-species/';

export const fetchPokemon = createAsyncThunk(
  'pokemon/pokemonFetch',
  async function data(name, { dispatch }) {
    const resp = await fetch(`${res}${name}`).then((respon) => {
      return respon.json();
    });
    const resp1 = await fetch(`${res1}${name}`).then((respon1) => {
      return respon1.json();
    });
    
    const data = await Promise.all([resp, resp1]).then((response) => {
      return response;
    });
    return data;
  },
);

export const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [fetchPokemon.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
    [fetchPokemon.pending.type]: (state) => {
      state.isLoaded = false;
      state.isError = false;
    },
    [fetchPokemon.rejected.type]: (state) => {
      state.isLoaded = true;
      state.isError = true;
    },
  },
});

export const { setData } = pokemonSlice.actions;
export default pokemonSlice.reducer;


