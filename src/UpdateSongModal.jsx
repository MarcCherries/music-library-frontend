import React, { useState } from 'react';
import "./UpdateSongModal.css"



const UpdateSongModal = (props) => {

   
    const [title, setTitle] = useState('Title')
    const [album, setAlbum] = useState('Album')
    const [artist, setArtist] = useState('Artist')
    const [release, setRelease] = useState('Release Date')
    const [genre, setGenre] = useState('Genre')

    function handleSubmit(event){
        event.preventDefault();
        let updatedSong = {
            title: title,
            album: album,
            artist: artist,
            release_date: release,
            genre: genre,
         

        }
            let updateChoice = props.searchSong(props.choice)
         
            props.updateSong(updatedSong, updateChoice)
    }

    if (!props.show) {
        return null
    }
    return ( 
        <div>
          
            <div id="myModal" className="modal">
            <form onSubmit={handleSubmit}className="modal-content">
                <span onClick={props.onClose} className="close">&times;</span>
              
               <input type="text" value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
               <input type="text" value={album} onChange={(event) => {setAlbum(event.target.value)}}></input>
               <input type="text" value={artist} onChange={(event) => {setArtist(event.target.value)}}></input>
               <input type="text" value={release} onChange={(event) => {setRelease(event.target.value)}}></input>
               <input type="text" value={genre} onChange={(event) => {setGenre(event.target.value)}}></input>
               <button type='submit'>Submit</button>

              
                </form>
            </div>
        </div>
     );
}
 
export default UpdateSongModal;