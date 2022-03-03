import React from 'react'
import Song from './Song'

function Setlist({setlist, onRemoveFromSetlist, onDelete}) {

    const setlistListItems = setlist.map(song => {
        return <Song key={song.id} song={song} onSongClicked={onRemoveFromSetlist} onDelete={onDelete}/>
    })

    return(
        <div className="setlist">
            {setlistListItems}
        </div>
    );
}

export default Setlist;