import React from 'react'
import Song from './Song'

function SongList({songs}) {

    const songListItems = songs.map(song => {
        return <Song song={song} />
    });

    return(
        <div className="song-list">
            {songListItems}
        </div>
    );
}

export default SongList;