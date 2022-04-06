import React from "react";
import SongDetails from './SongDetails';

const SongList = ({charts, playPreview}) => {

    const songNodes = charts.map((song, index) => {
        return (
        <li key={index} > 
        <div>
        <h2>Chart # {index+1}</h2>
        <img src={song["im:image"][2]["label"]} alt="Album Cover"/>
        <h3>Title: {song.title.label}</h3>
        <h4>Artist: {song["im:artist"]["label"]}</h4>
        <div>
            <button onClick={() => {playPreview(index)}}>Play Preview</button>
            
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