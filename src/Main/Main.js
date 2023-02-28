import React from 'react';
import { Outlet } from 'react-router-dom';
import Foot from '../Components/Shared/Foot/Foot';
import Navigation from '../Components/Shared/Navigation';
import Home from '../Components/Home/Home';
import Projects from '../Components/Projects/Projects';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Outlet></Outlet> */}
            <Home></Home>
            <Projects></Projects>
            <Foot></Foot>
        </div>
    );
};

export default Main;