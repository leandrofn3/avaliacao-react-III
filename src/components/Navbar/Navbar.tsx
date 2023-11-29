import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import CardMedia from "@mui/material/CardMedia";
import poke from "../../images/pokeapi.png";

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="absolute" color="error">
				<Toolbar>
					<Grid container spacing={6} justifyContent={"space-between"} alignItems={"center"}>
						<Grid item xs={9} sm={9} md={10} lg={11} xl={11}>
							<CardMedia image={poke} sx={{ height: 50, width: 110 }} />
						</Grid>
						<Grid item xs={3} sm={3} md={2} lg={1} xl={1}>
							<CatchingPokemonIcon sx={{ fontSize: 45 }} />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
