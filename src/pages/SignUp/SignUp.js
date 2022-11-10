import React from 'react';
import Services from '../../Services/Services';
import Header from '../Header/Header';
import TopRated from '../TopRated/TopRated';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <TopRated></TopRated>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;

