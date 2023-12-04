import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box, Button, CircularProgress, Grid, Pagination } from "@mui/material";
import { Cards, PokemonCard } from "../components/Cards/Cards";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPokemons } from "../store/modules/pokemons/pokemonsSlice";

export const Home: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const perPage = 20;

	const pokemonRedux = useAppSelector((state) => state.pokemon);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPokemons(currentPage));
	}, [currentPage, dispatch]);

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
	};
	if(pokemonRedux.loading){
		<CircularProgress/>
	}

	return (
		<React.Fragment>
			<Navbar />
			{/* {pokemonRedux.loading && <CircularProgress />}  */}
			<Box sx={{ padding: 9, marginTop: 3 }}>
				<Grid container spacing={2}>
					{pokemonRedux.pokemons.map((pokemon: PokemonCard) => (
						<Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
							<Cards pokemons={pokemon} />
						</Grid>
					))}
				</Grid>
				<Pagination 
					count={Math.ceil(pokemonRedux.count / perPage)}
					page={currentPage}
					onChange={handlePageChange}
					color="primary"
					sx={{ marginTop: 3, textAlign: "center"}}
				/>
			</Box>
		</React.Fragment>
	);
};
