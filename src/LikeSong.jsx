import React, { useState } from 'react';

const LikeSong = (props) => {

    const [like, setLike] = useState('Enter song to like: ')

    function handleSubmit(event){
        event.preventDefault();
        let likedSong = props.songs.filter((song)=>{
            if ( song.title ===like){
                
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
        
        props.likeSong(newLikedSong, likedSong)
        
    }


    return ( 
        <div>
            <input onChange={((event) =>setLike(event.target.value))} value={like} type="text"></input>
            <button type='submit' onClick={handleSubmit}>Like</button>
        </div>
     );
}
 
export default LikeSong;