import React from 'react'
import Infos from '../Components/Infos';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import Reasons from '../Components/Reasons';
import How from '../Components/How';
import Stories from '../Components/Stories';
import Discover from '../Components/Discover';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Infos/>
            <NavBar />
            <Hero />
            <Reasons />
            <How />
            <Stories />
            <Discover />
            <Footer />
        </div>
    );
};

export default Home;