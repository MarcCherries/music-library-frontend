import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    const [searchItem, setSearchItem] = useState('Enter a search term: ')
   
    
    function submitSearch(event){
        event.preventDefault()
        props.searchSong(searchItem)  
    }

    return ( 
        <div className="search-form">
            <form onSubmit={submitSearch}>
            <input className='search-input' type='text'  value={searchItem} onChange={(event) => setSearchItem(event.target.value)} ></input>
            </form>
            <button className='submit-search' type='submit'>Search</button>
        </div>
     );
}
 
export default SearchBar;