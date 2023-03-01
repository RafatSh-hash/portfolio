import React from 'react';

import Foot from '../Components/Shared/Foot/Foot';
import Navigation from '../Components/Shared/Navigation';
import Home from '../Components/Home/Home';
import Projects from '../Components/Projects/Projects';
import Welcome from '../Components/Welcome/Welcome';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Home></Home>
            <Welcome></Welcome>
            <Projects></Projects>
            <Foot></Foot>
        </div>
    );
};

export default Main;