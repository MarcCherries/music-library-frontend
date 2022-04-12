import React, { useState } from 'react';
import "./DisplayMusic.css"

const DisplayMusic = (props) => {

  
    return ( 
        <div className="display-table">
        <table>
        <tr>
            <th className="title" >TITLE</th>
            <th className="album">ALBUM</th>
            <th className="artist">ARTIST</th>
            <th className="release-date">RELEASE DATE</th>
            <th className="genre">GENRE</th>
            <th className="likes">LIKES</th>
        </tr>
        </table>
        <div>
            {props.parentSongs.map((song) =>{
            return(
                <div>
                <table>
                        <tr>
                            <td className="title">{song.title}</td>
                            <td className="album">{song.album}</td>
                            <td className="artist">{song.artist}</td>
                            <td className="release-date">{song.release_date}</td>
                            <td className="genre">{song.genre}</td>
                            <td className="likes">{song.likes}</td>
                         
                        </tr>
                        </table>
                </div>
            )})}
        </div>
        </div>
     );
}
 
export default DisplayMusic;