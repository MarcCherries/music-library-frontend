import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayMusic from './Components/DisplayMusic';
import SearchBar from './Components/SearchBar';
import CreateSong from './Components/CreateSong';

function App() {

  const [songs, setSongs] = useState([])
  


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
    <SearchBar searchSong={searchSong}/>
    <DisplayMusic parentSongs={songs} />
    <CreateSong addSong={addSong}/>
    </div>
  );

  }
export default App;
  