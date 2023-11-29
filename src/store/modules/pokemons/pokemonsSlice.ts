import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiService from '../../../config/services';

export interface PokemonType {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    types: PokemonType[];
}

interface PokemonsType {
    pokemons: [],
    loading: boolean
}

const initialState: PokemonsType = {
    pokemons: [],
    loading: false
};

export const getPokemon = createAsyncThunk("getPokemon", async () => {
    const response = await apiService.get("/");

    console.log(response, "eo response do pekemon slice");

    if (response.data === 20) return response.data;

    return [];
});

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

        clear: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemon.pending, (state) => {
            state.loading = true;
            return state;
        }),
            builder.addCase(getPokemon.fulfilled, (state, action) => {
                state.loading = false
                state.pokemons = action.payload;
                return state;
            });
    }
});

// const promises = response.data.results.map((p: any) => {
//     return axios.get(p.url)
// })

// const result = await Promise.all(promises)

// console.log(result);

// const data = result.reduce((acc, val) => {
//     acc.push(val.data)
//     return acc
// }, [])

export const { clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
