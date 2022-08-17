import { configureStore } from "@reduxjs/toolkit";
import pokemon from './slices/pokemonSlice';
import pokemonSpecies from './slices/pokemonSliceSpecies';

export const store = configureStore({
    reducer: {
        pokemon,
        pokemonSpecies
    }
});

