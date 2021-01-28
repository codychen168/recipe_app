import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className = 'pa3 ba b--yellow bg-lightest-pink' 
				type='search' 
				placeholder='search recipes'
				onChange={searchChange}
			/>
		</div>
	);
}

export default Searchbox;