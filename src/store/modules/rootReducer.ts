import { combineReducers} from "@reduxjs/toolkit";
import pokemonSlice from "./pokemons/pokemonsSlice"


export default combineReducers({
    pokemon: pokemonSlice,
});