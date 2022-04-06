import React from "react";

const SongDetails = ({songNodes}) => {

    return(
        <div>
            <ul>
                {songNodes}
            </ul>
        </div>
    )
};

export default SongDetails;