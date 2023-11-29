import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";


export interface CardsTypes {
    id: number;
    name: string
    image: string
}
export const Cards: React.FC = () => {
	return (
		<React.Fragment>
			<Card sx={{ maxWidth: 345, backgroundColor: "aliceblue"}}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="/static/images/cards/contemplative-reptile.jpg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
							continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
				</CardActions>
			</Card>
		</React.Fragment>
	);
};
