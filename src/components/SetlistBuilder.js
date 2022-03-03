import React from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {
    return(
        <div className="builder">
            <SongList />
            <div className="vl"></div>
            <Setlist />
        </div>
    );
}

export default SetlistBuilder;