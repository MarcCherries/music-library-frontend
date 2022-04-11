import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    const [searchItem, setSearchItem] = useState('Please enter a term to search for: ')
    const [searchType, setSearchType] = useState('Please enter a term to search for: ')
    
    function submitSearch(event){
        event.preventDefault()
        props.searchSong(searchItem)  
    }

    return ( 
        <div className="search-form">
            <form onSubmit={submitSearch}>
            <input type='text'  value={searchItem} onChange={(event) => setSearchItem(event.target.value)} ></input>
            <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default SearchBar;