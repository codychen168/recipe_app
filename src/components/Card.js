import React, { Component } from 'react';

class Card extends Component {
  state = {};
 constructor(props) {
   super(props);
   this.state = {
   };
 }
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }
  async componentDidMount() {
  	const { url } = this.props;
	const jsdom = require("jsdom");
	const { JSDOM } = jsdom;
	const response = await fetch(url);
	const text = await response.text();
	const dom = await new JSDOM(text);
	const title = dom.window.document.querySelector("h1").textContent;

	const ingredientNames = dom.window.document.getElementsByClassName('ingredient-name');
	const ingredientUnits = dom.window.document.getElementsByClassName('ingredient-unit');
	const ingredient_0 = ingredientNames[0].firstElementChild.textContent; 
	const ingredient_1 = ingredientUnits[0].textContent;
	var list_ingredientNames = [];
	var list_ingredientNamesComma = [];
	var list_ingredientUnits = [];
	var dict_ingredients = {};
	for (var i = 0; i < ingredientNames.length; i++) {
		if (i !== ingredientNames.length - 1) {
    	list_ingredientNamesComma.push(ingredientNames[i].firstElementChild.textContent);
    	list_ingredientNamesComma.push(', ');
		} else {
			list_ingredientNamesComma.push(ingredientNames[i].firstElementChild.textContent);
		}
		list_ingredientNames.push(ingredientNames[i].firstElementChild.textContent);
    	list_ingredientUnits.push(ingredientUnits[i].textContent);
    	dict_ingredients[ingredientNames[i].firstElementChild.textContent] = ingredientUnits[i].textContent;

	}
	// console.log({list_ingredientNames, list_ingredientUnits});

	// console.log(dict_ingredients);
    await this.setStateAsync(
    	{
    		recipeName: title,
    		ingredientName1: ingredient_0,
    		ingredientUnit1: ingredient_1,
    		ingredientNames: list_ingredientNames,
    		ingredientNamesComma: list_ingredientNamesComma,
    		ingredientUnits: list_ingredientUnits,
    		ingredients: dict_ingredients
    	}
    )
  }
  render() {
  	const { id } = this.props;
  	const ingredientNamesComma = this.state.ingredientNamesComma;
  	// const ingredientNames = this.state.ingredientNames;
  	// const ingredients = this.state.ingredients;
  	// console.log(ingredientNames);
  	// console.log(ingredients);
    return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2>{this.state.recipeName || 'Unknown'}</h2>
			<p>{this.state.ingredientName1}:{this.state.ingredientUnit1}</p>
			<h1>...</h1>
			<h2 style={{ textTransform: 'uppercase' }}>Ingredients</h2>
			<p>{ingredientNamesComma}</p>
			<img alt='recipes' src={`https://robohash.org/${id}?200x200`} />
		</div>	
    );
  }
}

export default Card;


// const Card = ({ name, email, id }) => {
// 	return(
// 		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<h1>RoboRecipes</h1>
// 			<img alt='recipes' src={`https://robohash.org/${id}?200x200`} />
// 			<div>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		</div>	
// 	);
// }

// export default Card;