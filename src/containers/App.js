import React from 'react';
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import './App.css';
import {recipes} from '../recipes.js';

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			recipes: recipes, 
			searchfield: ''
		}
	}

	//componentDidMount(){
	//	fetch('https://jsonplaceholder.typicode.com/users')
	//	.then(response=> response.json())
	//	.then(users => this.setState({robots: users}));
	//}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

    render(){
    	//conts {robots, searchfield} = this.state;
    	const filteredRecipes = this.state.recipes.filter(recipe =>{
			return recipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.recipes.length === 0){ //CHECAR ESTE IF, NO LO OCUPO
			return <h1>Loading</h1>
		}else{
			return(
				<div className='tc'>
					<NavigationBar />
					<br />
					<br />
					<br />
					<h1 className='f2' style={{fontFamily:"Roboto", fontWeight:"", color:"white", marginBottom:"10px",}}>Encuentra tu receta</h1>
					<SearchBox searchChange={this.onSearchChange}/> 
					<Scroll>
						<CardList recipes={filteredRecipes}/>
					</Scroll>
					<Footer />
				</div>
			);
		}
	}
}

export default App;