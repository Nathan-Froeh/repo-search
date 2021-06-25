
import './App.css';
import {search} from './apiCalls';
import React, {useState} from 'react';
import Search from './Search/Search';

function App() {
  const [selectedRepo, setSelectedRepo] = useState();
  const [searchResults, setSearchResults] = useState();

  function selectRepo(event) {
    // setSelectedRepo(event)
    console.log('event', event)
  }

  return (
    <div className="App">
      <Search onSubmit={githubResults => setSearchResults(githubResults)}></Search>
      {
        searchResults && <p>{searchResults[0]?.name}</p>
      }
    
    </div>
  );
}

export default App;
