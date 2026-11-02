import React from 'react';
import NavBar from '../NavBar';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Eduction from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function Home() {
    return ( 
       <>
      
       <Hero/>
       <Awards/>
       <Stats/>
       <Pricing/>
       <Eduction/>
       <OpenAccount/>
      

       </>
     );
}

export default Home;