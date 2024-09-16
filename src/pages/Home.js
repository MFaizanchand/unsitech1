import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import MetaTags from 'react-meta-tags';
const Home = () => {
    return (
        <>
        <MetaTags>
            <title>UNSI | Home</title>
            <meta name="Home page of UNSI tech" content="Some description." />
            <meta property="og:title" content="MyApp" />  
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            <Clients />
            <Cta/>
            <Footer />
            
        </>

    )
}

export default Home;

