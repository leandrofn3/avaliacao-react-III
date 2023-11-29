// import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box, CircularProgress, Grid } from "@mui/material";
import { Cards } from "../components/Cards";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import  { getPokemon } from "../store/modules/pokemons/pokemonsSlice";
//1:27:00
export const Home: React.FC = () => {
	const pokemons = useAppSelector((state)=> state.rootReducer)
		console.log(pokemons, "aqui os pokemons")
		const dispatch = useAppDispatch();
		console.log(dispatch, "aqui o dispatch")

		useEffect(()=> {
			dispatch(getPokemon())
		}, []);

		if(pokemons.pokemon.loading){
			return <CircularProgress/>
		}

		// const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`)
	return (
		<React.Fragment>
			<Navbar />
			<Box sx={{padding: 9, marginTop: 3, }}>
			{/* <Grid container spacing={1.5}>
				<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
					<Cards />
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
					<Cards />
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
					<Cards />
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
					<Cards />
				</Grid>
			</Grid> */}
			</Box>
		</React.Fragment>
	);
};


// export interface Pokemon {
//     id: number;
//     name: string;
//     base_experience: number;
//     height: number;
//     is_default: boolean;
//     order: number;
//     weight: number;
//     abilities: Ability[];
//     forms: NamedAPIResource[];
//     game_indices: VersionGameIndex[];
//     held_items: PokemonHeldItem[];
//     location_area_encounters: string;
//     moves: PokemonMove[];
//     sprites: PokemonSprites;
//     species: NamedAPIResource;
//     stats: PokemonStat[];
//     types: PokemonType[];
// }

// interface Ability {
//     is_hidden: boolean;
//     slot: number;
//     ability: NamedAPIResource;
// }

// interface NamedAPIResource {
//     name: string;
//     url: string;
// }

// interface VersionGameIndex {
//     game_index: number;
//     version: NamedAPIResource;
// }

// interface PokemonHeldItem {
//     item: NamedAPIResource;
//     version_details: PokemonHeldItemVersion[];
// }

// interface PokemonHeldItemVersion {
//     version: NamedAPIResource;
//     rarity: number;
// }

// interface PokemonMove {
//     move: NamedAPIResource;
//     version_group_details: PokemonMoveVersion[];
// }

// interface PokemonMoveVersion {
//     move_learn_method: NamedAPIResource;
//     version_group: NamedAPIResource;
//     level_learned_at: number;
// }

// interface PokemonSprites {
//     front_default: string;
//     front_shiny: string;
//     front_female: string | null;
//     front_shiny_female: string | null;
//     back_default: string;
//     back_shiny: string;
//     back_female: string | null;
//     back_shiny_female: string | null;
// }

// interface PokemonStat {
//     stat: NamedAPIResource;
//     effort: number;
//     base_stat: number;
// }

// interface PokemonType {
//     slot: number;
//     type: NamedAPIResource;
// }