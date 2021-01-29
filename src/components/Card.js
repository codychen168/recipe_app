import React, { Component } from 'react';

class Card extends Component {
	state = {};
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			ingredientNames: [],
			ingredientUnits: [],
			ingredientNamesComma: [],
			ingredientName1: '',
			ingredientUnit1: '',
			ingredients: {}
		};
	}
	
	setStateAsync(state) {
		return new Promise((resolve) => {
			this.setState(state, resolve);
		});
	}

	async componentDidMount() {
		const { url } = this.props;

		fetch(url)
		.then(response=> response.text())
		.then(html => {
			var parser = new DOMParser();
			var document = parser.parseFromString(html, 'text/html');
			var title = document.querySelector("h1").textContent;	
			var ingredientNames = document.getElementsByClassName('ingredient-name');
			var ingredientUnits = document.getElementsByClassName('ingredient-unit');
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

			this.setState({ 
				title: title,
				ingredientNames: ingredientNames,
				ingredientUnits: ingredientUnits,
				ingredientNamesComma: list_ingredientNamesComma,
				ingredientName1: ingredientNames[0].firstElementChild.textContent,
				ingredientUnit1: ingredientUnits[0].textContent,
				ingredients: dict_ingredients
			});
		});
	}

	render() {
		const { id } = this.props;
		const { ingredientNamesComma,title, ingredientName1,ingredientUnit1 } = this.state;

		return (
				// <div className="zone">
				<div className='tc bg-light-gray br3 pa3 ma3 grow bw2 shadow-5'>
					<h2>{title || 'Unknown'}</h2>
					<p>{ingredientName1}:{ingredientUnit1}</p>
					<h1>...</h1>
					<h2 style={{ textTransform: 'uppercase' }}>Ingredients</h2>
					<p>{ingredientNamesComma}</p>
					<img alt='recipes' src={`https://robohash.org/${id}?200x200`} />
				</div>	
		);
	}
}

export default Card;