import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string;
    back_shiny: string;
    back_female: string | null;
    back_shiny_female: string | null;
}

interface Pokemons {
    id: number;
    name: string;
    types: PokemonType[];
    sprites: PokemonSprites;
}

interface PokemonSliceType {
    count: number;
    next: number | null;
    previous: string | null;
    pokemons: Pokemons[];
    loading: boolean;
}

const initialState: PokemonSliceType = {
    count: 0,
    next: 0,
    previous: "",
    loading: false,
    pokemons: []
}

// export const getPokemons = createAsyncThunk("pokemons/getPokemons", async (urlParams: string | null, {getState}) => {
//     const state = getState() as {pokemon:  PokemonSliceType}
//     const url = urlParams ? urlParams : "https://pokeapi.co/api/v2/pokemon"
//     const {next} = state.pokemon
//     try {
//         const response = await axios.get(`${url}/${next}`);

//         if (response.status === 200) {
//             const { data } = response;

//             const promises = data.results.map(async (i: any) => {
//                 const promise = axios.get(i.url)
//                 return promise;
//             }); 
//             console.log(promises)

//             if(response.status === 200){
//                 return response.data
//             }
//         }
//     } catch (error) {
//         throw "error ao buscar pokemons"
//     }


//     return [];
// });

export const getPokemons = createAsyncThunk(
    "pokemons/getPokemons",
    async (currentPage: number, { getState }) => {
        getState() as { pokemon: PokemonSliceType }
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * 20}&limit=${20}`)
            const totalCount = response.data.count;
            const promises = response.data.results.map((p: any) => {
                return axios.get(p.url);
            });
            const result = await Promise.all(promises)
            const data = result.reduce((acc, current) => {
                acc.push(current.data)
                return acc
            }, [])
            return { data, currentPage, totalCount }
        } catch (error) {
            throw new Error("Error ao buscar pokemons");
        }
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

        clear: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemons.pending, (state) => {
            state.loading = true;
            return state;
        }).addCase(getPokemons.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemons = action.payload.data;
            state.count = action.payload.totalCount;
            state.next = action.payload.currentPage;
            // state.previous = action.payload.previous;
        }).addCase(getPokemons.rejected, (state) => {
            state.loading = false;
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
