import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { recipes } from '../components/recipes';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			recipes: recipes,
			searchfield: ''
		}
	}

	// componentDidMount () {
	// 	fetch('https://icook.tw/recipes/').then(response=>{
	// 		console.log(response)
	// 	})
	// }

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRecipes = this.state.recipes.filter(recipe => {
				return recipe.ingredients.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		return (
			<div className='tc'>
				<h1 className='f1'>RoboRecipes</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList recipes={filteredRecipes} />
			</div>
		);		
	}
}

export default App;