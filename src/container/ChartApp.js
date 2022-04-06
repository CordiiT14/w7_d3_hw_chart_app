import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const ChartApp = () => {

const [charts, setCharts] = useState([]);

useEffect(() => {
    itunesCharts();
},[]);

const itunesCharts = function() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(result => result.json())
    .then(fetchedCharts => setCharts(fetchedCharts.feed.entry));
    console.log(charts);
}

    const playPreview = (index) => {
        console.log(`song:${index}`)
    }
    
    return(
        <div>
            <h1>The ChartApp</h1>
            <SongList charts={charts} playPreview={playPreview}/>
        </div>
    )
}

export default ChartApp;
