import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {

    const [songs, setSongs] = useState([]);
    const [setlist, setSetlist] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3110/tracks")
        .then(response => response.json())
        .then(songJson => setSongs(songJson))
    }, []);

    function handleAddToSetlist(song) {
        const setlistIndex = setlist.findIndex(item => item.id === song.id);
        if (setlistIndex === -1) {
            setSetlist([...setlist, song]);
        }
    }

    function handleOnRemoveFromSetlist(song) {
        const setlistIndex = setlist.findIndex(item => item.id === song.id);
        if (setlistIndex >= 0) {
            const setlistCopy = [...setlist];
            setlistCopy.splice(setlistIndex, 1);

            setSetlist(setlistCopy);
        }
    }

    function handleDelete(song) {
        /*
        Uncomment this to see it actually delete.

        fetch("http://localhost:3110/tracks/" + song.id, {
            method: "DELETE"
        });
        */
       
        const songIndex = songs.findIndex(item => item.id === song.id);
        if (songIndex >= 0) {
            const songArrayCopy = [...songs];
            songArrayCopy.splice(songIndex, 1);

            setSongs(songArrayCopy);
        }

        const setlistIndex = setlist.findIndex(item => item.id === song.id);
        if (setlistIndex >= 0) {
            const setlistArrayCopy = [...setlist];
            setlistArrayCopy.splice(setlistIndex, 1);

            setSetlist(setlistArrayCopy);
        }
    }

    return(
        <div className="builder">
            <SongList songs={songs} onAddToSetlist={handleAddToSetlist} onDelete={handleDelete}/>
            <div className="vl"></div>
            <Setlist setlist={setlist} onRemoveFromSetlist={handleOnRemoveFromSetlist} onDelete={handleDelete}/>
        </div>
    );
}

export default SetlistBuilder;