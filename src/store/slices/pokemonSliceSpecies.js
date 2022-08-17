import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const res = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemonSpecies = createAsyncThunk(
  'pokemonSpecies/pokemonSpeciesFetch',
  async function dataOne(name) {
    const resp =  await fetch(`${res}${name}`).then(response => response.json());
    console.log(resp)
    return resp;
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
    [fetchPokemonSpecies.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
    [fetchPokemonSpecies.pending.type]: (state) => {
      state.isLoaded = false;
      state.isError = false;
    },
    [fetchPokemonSpecies.rejected.type]: (state) => {
      state.isLoaded = true;
      state.isError = true;
    },
  },
});

export const { setData } = pokemonSlice.actions;
export default pokemonSlice.reducer;


