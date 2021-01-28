import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
// import Card from './Card';
// import CardList from './CardList';
// import { recipes } from './recipes';

ReactDOM.render(
  <React.StrictMode>
		<App />,
  </React.StrictMode>,
  document.getElementById('root'),
);
    	
    	// <Card url={recipes[0].url} id={0} />
    	// <Card url='https://icook.tw/recipes/46241' id={0} />
    	// <Card url='https://icook.tw/recipes/164694' id={1} />
    	// <Card url='https://icook.tw/recipes/350567' id={2} />
    	// <Card46241 />
    	// <Card164694 />
    	// <Card350567 />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


    	// <Card id={recipes[0].id} name={recipes[0].name} email={recipes[0].email}/>
    	// <Card id={recipes[1].id} name={recipes[1].name} email={recipes[1].email}/>
    	// <Card id={recipes[2].id} name={recipes[2].name} email={recipes[2].email}/>
    	// <Card id={recipes[3].id} name={recipes[3].name} email={recipes[3].email}/>	