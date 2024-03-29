import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className='pa2'>
		<input 
			className='pa2 ba b--black bg-lightest-white'
			type='search' 
			placeholder='Busca tus recetas'
			onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;