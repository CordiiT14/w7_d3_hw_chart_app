import React from "react";
import "./SongList.css";

const SongDetails = ({songNodes}) => {

    return(
            <ul>
                {songNodes}
            </ul>
    )
};

export default SongDetails;