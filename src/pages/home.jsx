import React from 'react';
import {Link} from 'react-router-dom'
import Hero from '../components/hero';
import Banner from '../components/banner';
import Services from '../components/services';
import FeaturedRooms from '../components/featuredRooms';

const Home = () => {
    return (
        <> 
        <Hero hero= "defaultHero">
            <Banner title= "Luxurious Rooms" subtitle= "Deluxe rooms startting at $299" >
                <Link to="/rooms" className = "btn-primary"> our rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
     );
}
 
export default Home;