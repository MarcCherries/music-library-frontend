import React, { useState } from 'react';
import "./DisplayMusic.css"

const DisplayMusic = (props) => {

    function handleSubmit(event){
        event.preventDefault();
        let songWarning = props.parentSongs.filter((song)=>{
          
            if (song.id == event.target.value){
                return true;
            }
        
        })
        console.log(songWarning)
        let confirm=prompt(`Warning! You are about to permenantly delete ${songWarning[0].title} by ${songWarning[0].artist}! type 'yes' to confirm. `)
        if (confirm==='yes'){
            
            
            props.deleteSong(event.target.value)
            alert(`Okay, ${songWarning[0].title} by ${songWarning[0].artist} has been deleted! If you need to add it back, might I suggest the Add Song Wizard? `)

        }
     
      
    }

    function handleClick(event){
        event.preventDefault(event);
        let likedSong = props.parentSongs.filter((song)=>{
            if ( song.title ===event.target.value){
                
                return true
            }  
        })
        let newLikes = likedSong[0].likes + 1
        let newLikedSong = {
            title: likedSong[0].title,
            album: likedSong[0].album,
            artist: likedSong[0].artist,
            release_date:likedSong[0].release_date,
            genre:likedSong[0].genre,
            likes: newLikes 
        }
        props.likeSong(newLikedSong, likedSong);
    }


    return ( 
        <div className="display-table">
        <table>
        <tr>
            <th className="title1" >TITLE</th>
            <th className="album">ALBUM</th>
            <th className="artist">ARTIST</th>
            <th className="release-date">RELEASE DATE</th>
            <th className="genre">GENRE</th>
            <th className="likes1">LIKES</th>
        </tr>
        </table>
        <div>
            {props.parentSongs.map((song) =>{
            return(
                <div>
                <table>
                        <tr>
                            
                            <td ><div className='title'>{song.title} 
                            <button className= 'delete-button' onClick={handleSubmit} type='submit' value={song.id} >Delete</button>
                            </div></td>
                            <td className="album">{song.album}</td>
                            <td className="artist">{song.artist}</td>
                            <td className="release-date">{song.release_date}</td>
                            <td className="genre">{song.genre}</td>
                            <td><div className='likes'>{song.likes} <button onClick={handleClick} type='submit' value={song.title} className="like-button" >Like</button></div></td>
                            
                           
                        </tr>
                </table>
                </div>
            )})}
        </div>
        </div>
     );
}
 
export default DisplayMusic;