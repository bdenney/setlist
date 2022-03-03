import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3110/tracks")
        .then(response => response.json())
        .then(songJson => setSongs(songJson))
    }, []);

    return(
        <div className="builder">
            <SongList songs={songs}/>
            <Setlist />
        </div>
    );
}

export default SetlistBuilder;