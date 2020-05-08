import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/hero';
import Banner from '../components/banner';
import RoomContainer from '../components/roomContainer';


const Rooms = () => {
    return (
        <>
            <Hero hero= "roomsHero">
                <Banner title="Our rooms">
                    <Link to="/" className="btn-primary">
                        home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
        );
}
 
export default Rooms;