import React, { useState } from 'react';
import "./CreateSong.css"

const CreateSong = (props) => {

    const [title, setTitle]                 = useState("Title")
    const [album, setAlbum]                 = useState("Album")
    const [artist, setArtist]               = useState("Artist")
    const [release_date, setReleaseDate]    = useState("Release Date")
    const [genre, setGenre]                 = useState("Genre")
  
    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            album: album,
            artist: artist,
            release_date: release_date,
            genre: genre,
            likes:0
        }
        props.addSong(newSong)
        console.log(newSong)
    }
    return ( 
<div>

    <form className="create-form" onSubmit={handleSubmit}>
    <h1>Add Song Wizard</h1>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}></input>
        <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}></input>
        <input type="text" value={release_date} onChange={(event) => setReleaseDate(event.target.value)}></input>
        <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}></input>
        <button  type="submit" width='2rem'></button>
    </form>
</div>
     );
}
export default CreateSong;