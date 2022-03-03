import React from 'react'

function Song({song}) {
    return(
        <div className="song">
            <img src={song.image}/>
            <div className="song-info">
                <h3>{song.song}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default Song;