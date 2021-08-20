import React from 'react';
import Body from './Body/Body';
import './Player.css';
import SideBar from './SideBar/SideBar.jsx';
import Footer from './Footer/Footer.jsx';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();


function Player() {
    return (
        <div className="player">
            <div className="player_body">
                {/* sidebar */}
                <SideBar/>
                {/* body */}
                <Body spotify={spotify}/>
            </div>

             {/*footer  */}
             <Footer/>
        </div>
    )
}

export default Player;

