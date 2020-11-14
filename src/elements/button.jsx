import { withRouter } from 'react-router-dom';
import React from 'react';

const Button = withRouter(({ onClick }) => (
		<button
				type='button'
				onClick={onClick}
		>
			To Paradise
		</button>
));

export default Button;