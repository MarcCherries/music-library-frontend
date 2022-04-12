import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayMusic from './Components/DisplayMusic';
import SearchBar from './Components/SearchBar';
import CreateSong from './Components/CreateSong';
import UpdateSongModal from './UpdateSongModal';
import './App.css'

import LikeSong from './LikeSong';

function App() {

  const [songs, setSongs] = useState([])
  const [modal, setModal] = useState(false)
  const [choice, setChoice] = useState('Enter a song title')


 async function updateSong(updatedSong, input){
    let response = await axios.put(`http://127.0.0.1:8000/music/${input[0].id}/`, updatedSong) 
    if (response.status===200) {
      await getAllSongs()
    }

 }

 async function likeSong (updatedSong, likedSong){
   let response = await axios.put(`http://127.0.0.1:8000/music/${likedSong[0].id}/`, updatedSong)
   if (response.status===200) {
    await getAllSongs()
  }
 }
 function searchSongForUpdate(input){
  let searchResult = songs.filter((song)=>{

    if(song.title===input){ 
        return true    
    }})
    return searchResult
  
    }

  function searchSong(input){
    let searchResult = songs.filter((song)=>{
  
      if(song.title===input){ 
          return true    
      }
      else if(song.artist ===input){
          return true
      }  
      else if(song.album ===input){
          return true
      }  
      else if(song.release_date ===input){
          return true
      }  
      else if(song.genre ===input){
          return true
}}
    )
    return setSongs(searchResult)
  }

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data); 
  }
  async function deleteSongasdfsdf(song){
    let response = await axios.delete(`http://127.0.0.1:8000/music/${song[0].id}/`);
    await getAllSongs()
  }
  async function deleteSong(song){
    let response = await axios.delete(`http://127.0.0.1:8000/music/${song}/`);
    await getAllSongs()
  }

  async function addSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if (response.status===201) {
      await getAllSongs()
    }
    }

  

  return (
    <div  className='app-container'>
          <div className='nav-area'>
          <div className='column1'>
    
    <input type="text" onDoubleClick={()=>setChoice('')} className='choice-input' onChange={(event)=> setChoice(event.target.value)} value={choice} ></input>
    <button type='submit'  onClick={()=> setModal(true)} onSubmit={()=>setChoice('')} id='myBtn' className="modal-update">Update</button>
    </div>
    <div className="center-logo"><h2 className='logo-text'>Sweet</h2><img className="image-logo" width='75' height='75' src= {require( "C:/Users/Chris/Desktop/devCodeCamp/music-library-frontend/music-library/src/Components/images/itunes.png")}></img><h2 className='logo-text'>Beats</h2></div>
    <div className='column3'>
         <UpdateSongModal className="update-song" choice={choice} show={modal} onClose={() =>setModal(false)} updateSong={updateSong} songs={songs} searchSong={searchSongForUpdate} setChoice={setChoice} />
         <SearchBar className="search-bar" searchSong={searchSong}/>
         </div>

         </div>
      <div className='middle-column'>
       <div >
          <DisplayMusic className='music-table' parentSongs={songs} deleteSong={deleteSong} />
          <LikeSong songs={songs} likeSong={likeSong} />
          </div>
          
          <div className='column2'>
            <div className='create-song'>
          <CreateSong  addSong={addSong}/>
          </div>
         
          </div>
  
          </div>
          </div>
         
  
  
   
  
    
 

 

  
  );

  }
export default App;
  