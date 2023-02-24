import React from 'react';
import { Outlet } from 'react-router-dom';
import Foot from '../Components/Shared/Foot/Foot';
import Navigation from '../Components/Shared/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
           
            <Foot></Foot>
        </div>
    );
};

export default Main;