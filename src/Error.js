import React from 'react';
import {Link} from 'react-router-dom';
import './utils/error.css';

const Error = () => {
	return (
		<div class="error">
            <h2>Oops! Page not found.</h2>
            <h1>ERROR 404</h1>
            <p>We can't find the page you're looking for :(</p>
            <Link to='/'>Back Home</Link>
    	</div>
	);
}

export default Error;