import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = ()=>(
    <h1>Home</h1>
)

const Video = ()=>(
    <h1>Video</h1>
)

const Playlist = ()=>(
    <h1>Playlist</h1>
)

export const SwitchRoute = ()=>{

    return(
        <div>
            <BrowserRouter>
              <Switch>
                <Route path ='/' exact render={Home}/>
                <Route path ='/videos' render={Video}/>
                <Route path ='/playlist' render={Playlist}/>
              </Switch>
            </BrowserRouter>
        </div>
    )

}