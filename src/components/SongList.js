import React from 'react'
import Song from './Song'

function SongList({songs, onAddToSetlist, onDelete}) {

    const songListItems = songs.map(song => {
        return <Song key={song.id} song={song} onSongClicked={onAddToSetlist} onDelete={onDelete}/>
    });

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            
            {songListItems}
        </div>
        </>
    );
}

export default SongList;