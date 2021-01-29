import React from 'react';
import Card from './Card';

const CardList = ({ recipes }) => {
	return (
		<div className="container">
			{
				recipes.map((recipe, i) => {
					return	(
						<Card 
							key={i} 
							url={recipes[i].baseUrl+recipes[i].recipeId} 
							id={recipes[i].id} 
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;