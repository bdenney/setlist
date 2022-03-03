import React from 'react'

function Song() {

    return(
        <div className="song" onClick={()=>console.log("Song clicked...")}>
            <img src=""/>
            <div className="song-info">
                <h3>SONG</h3>
                <h4>ARTIST</h4>
            </div>
            <button onClick={()=> console.log("Delete clicked...")}>X</button>
        </div>
    );
}

export default Song;