import React, { useState } from 'react';
import './DeleteSong.css'

const DeleteSong = (props) => {

    const [title, setTitle]                 = useState("Title")
  
  

    function handleSubmit(event){
        event.preventDefault();
        let toDelete = props.songs.filter((song) =>{
        
            if (song.title === title)
           
         
            return true
        })

    
        props.deleteSong(toDelete)

    }
    return ( 
        <div>

    <form className="delete-form" onSubmit={handleSubmit}>
    <h3>Delete Song:</h3>
        <input className='delete-input' type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        
       
        <button  className="delete-button" type="submit" >Delete</button>
    </form>
</div>
     );
}
 
export default DeleteSong;