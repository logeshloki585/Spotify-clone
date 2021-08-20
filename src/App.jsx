import React, { useEffect } from "react";
import Login from "./Login/Login.jsx";
import Player from './Player/Player.jsx'
import { getTokenFromUrl } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import { UserDataLayerValue } from "./DataLayer.jsx";

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token },dispatch] = UserDataLayerValue();

  

  useEffect (() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then( user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });
      

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
    }
  },[]);

  return (
    <div className="app">
      { token ?<Player spotify={spotify}/> :<Login/>}
    </div>
  );
}

export default App;
