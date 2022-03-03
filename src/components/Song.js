import React from 'react'

function Song({song, onSongClicked, onDelete}) {

    function handleDelete(event) {
        event.stopPropagation();
        onDelete(song);
    }

    return(
        <div className="song" onClick={()=>onSongClicked(song)}>
            <img src={song.image}/>
            <div className="song-info">
                <h3>{song.song}</h3>
                <h4>{song.artist}</h4>
            </div>
            <button onClick={handleDelete}>X</button>
        </div>
    );
}

export default Song;