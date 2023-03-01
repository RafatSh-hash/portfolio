import React from 'react';

import Foot from '../Components/Shared/Foot/Foot';
import Navigation from '../Components/Shared/Navigation';
import Home from '../Components/Home/Home';
import Projects from '../Components/Projects/Projects';
import Welcome from '../Components/Welcome/Welcome';
import Skills from '../Components/Skills/Skills';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Home></Home>
            <Welcome></Welcome>
            <Projects></Projects>
            <Skills></Skills>
            <Foot></Foot>
        </div>
    );
};

export default Main;