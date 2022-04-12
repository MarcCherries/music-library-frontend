import React, { useState } from 'react';
import "./UpdateSongModal.css"



const UpdateSongModal = (props) => {

   
    const [title, setTitle] = useState('Title')
    const [album, setAlbum] = useState('Album')
    const [artist, setArtist] = useState('Artist')
    const [release, setRelease] = useState('Release Date')
    const [genre, setGenre] = useState('Genre')

    function fillForm (event){
        event.preventDefault();
        let fillChoice = props.searchSong(props.choice)
        setTitle(fillChoice[0].title);
        setAlbum(fillChoice[0].album);
        setArtist(fillChoice[0].artist);
        setRelease(fillChoice[0].release_date);
        setGenre(fillChoice[0].genre);
        
    }

    function handleSubmit(event){
        event.preventDefault();
        let updateChoice = props.searchSong(props.choice)
        let updatedSong = {
            title: title,
            album: album,
            artist: artist,
            release_date: release,
            genre: genre,
            likes: updateChoice[0].likes
         

        }
            
         
            props.updateSong(updatedSong, updateChoice);
            setTitle('');
            setArtist('');
            setAlbum('');
            setRelease('');
            setGenre('');
            props.setChoice('')
    }

    if (!props.show) {
        return null
    }
    return ( 
        <div>
          
            <div id="myModal" className="modal">
            <form onSubmit={handleSubmit}className="modal-content">
                <h1>Update Song Wizard</h1>
                <p>(please provide info for ALL fields!)</p>
                <span onClick={props.onClose} className="close">&times;</span>

                <button onClick={fillForm} type='submit'>Fill</button>
               <input type="text" onDoubleClick={()=>setTitle('')} value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
               <input type="text" onDoubleClick={()=>setAlbum('')} value={album} onChange={(event) => {setAlbum(event.target.value)}}></input>
               <input type="text" onDoubleClick={()=>setArtist('')} value={artist} onChange={(event) => {setArtist(event.target.value)}}></input>
               <input type="text" onDoubleClick={()=>setRelease('')} value={release} onChange={(event) => {setRelease(event.target.value)}}></input>
               <input type="text" onDoubleClick={()=>setGenre('')} value={genre} onChange={(event) => {setGenre(event.target.value)}}></input>
               <button type='submit'>Submit</button>

              
                </form>
            </div>
        </div>
     );
}
 
export default UpdateSongModal;