import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { PokemonSprites, PokemonType } from "../../store/modules/pokemons/pokemonsSlice";

export interface PokemonCard {
	id: number;
	name: string;
	types: PokemonType[];
	sprites: PokemonSprites;
}

// interface CardsTypes {
//     pokemons: PokemonCard;
// }

export const Cards: React.FC<{ pokemons: PokemonCard }> = ({ pokemons }) => {
	// const renderPokemonImage = (sprites: PokemonCard) => {
	//     const defaultImage = sprites.sprites.front_default || ""; // URL padrão ou vazia
	//     return defaultImage || "https://via.placeholder.com/140"; // URL de imagem padrão caso a imagem esteja vazia
	// };

	return (
		<React.Fragment>
			<Card sx={{ maxWidth: 345, backgroundColor: " #EDEDED", border: 2 }}>
				<CardActionArea>
					<CardMedia component="img" height="250" image={pokemons.sprites.front_default} alt="imagem-pokemon" />
					<CardContent>
						<Typography gutterBottom variant="body1">
							Name: {pokemons?.name}
						</Typography>
						<Typography gutterBottom variant="body1">
							ID: #{pokemons?.id}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Detalhe
					</Button>
				</CardActions>
			</Card>
		</React.Fragment>
	);
};
