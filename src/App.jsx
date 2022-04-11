import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayMusic from './Components/DisplayMusic';
import SearchBar from './Components/SearchBar';
import CreateSong from './Components/CreateSong';

function App() {

  const [songs, setSongs] = useState([])
  
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

  async function addSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if (response.status===201) {
      await getAllSongs()
    }
    }

  return (
    <div >
      
          <CreateSong addSong={addSong}/>

    <DisplayMusic parentSongs={songs} />
    <SearchBar searchSong={searchSong}/>

    </div>
  );

  }
export default App;
  