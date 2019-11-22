import React from 'react';
import './Card.css';

const Card = ({name, url, id, image, ingredients}) =>{
	return (
		<div className="tc bg-white dib br3 pa3 ma2 bw2 shadow-5 cardwidth">
			<div>
				<h4 className="recipetitle">{name}</h4>
				<img className="recipeimg" alt="recetas" src={image}/>
				<h4 className="ingtitle">Ingredientes:</h4>
				<ul className="inglist">
					{ingredients.map((ingredient, i)=>{
						return(
						<li key={i}>{ingredients[i]}</li>
						);
					})}
				</ul>
				<a className="recipelink" href={url} target="blank">Receta completa</a>
			</div>
		</div>
	);
}

export default Card;