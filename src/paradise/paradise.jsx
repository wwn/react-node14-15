import React from 'react';
import home from '../static/images/landscape-3369304_640.jpg';
import style from './style.scss';

const Paradise = () => (
		<div>
			The Paradise
			<img className={style.img} src={home} alt={"Sweet Home"} />
		</div>
);

export default Paradise;