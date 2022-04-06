import React from "react";
import SongDetails from './SongDetails';
import PlayAudio from 'react-simple-audio-player';
import "./SongList.css";

const SongList = ({charts}) => {

    const songNodes = charts.map((song, index) => {
        return (
        <li key={index} > 
            <div className="song-card">
                <h2>Chart # {index+1}</h2>
                <img src={song["im:image"][2]["label"]} alt="Album Cover"/>
                <h3>{song["im:name"]["label"]}</h3>
                <h4>{song["im:artist"]["label"]}</h4>
                <div className='player'>
                    <PlayAudio url={song.link[1].attributes.href}/>
                </div>
            </div>
        </li>
        )
    });

    return(
        <div>
            <SongDetails songNodes={songNodes}/>
        </div>
    )
}

export default SongList;