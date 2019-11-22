import React from 'react';
import Card from './Card'
import './CardList.css';

const CardList = ({recipes}) => {
	return(
		<div className="rearrange">
			{
				recipes.map((user, i) => {
					return (
						<Card 
						key={i} 
						//id={robots[i].id} 
						image={recipes[i].image}
						name={recipes[i].name} 
						url={recipes[i].url}
						ingredients={recipes[i].ingredients}
						/>
			    	);
				})
			};
		</div>  
	);
}

export default CardList;