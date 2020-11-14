import React from 'react';

import Button from '../elements/button';
import "../paradise/style.scss";
import { withRouter } from 'react-router-dom';

const Home = withRouter(({ history }) => (
    <div>
        <h1>Go to paradise</h1>
        <Button onClick={() => history.push('/paradise')}/>
    </div>
));

export default Home;