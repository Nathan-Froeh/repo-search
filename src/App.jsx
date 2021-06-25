
import './App.css';
import {search} from './apiCalls';
import React, {useState} from 'react';
import Search from './Search/Search';
import RepoListItem from './RepoListItem/RepoListItem';

function App() {
  const [selectedRepo, setSelectedRepo] = useState();
  const [searchResults, setSearchResults] = useState([]);
  let reposToRender;

  if(searchResults) {
    reposToRender = searchResults.map(repo => (
        <RepoListItem repo={repo} key={repo.id}></RepoListItem>
      ))
    }

  function selectRepo(event) {
    // setSelectedRepo(event)
    console.log('event', event)
  }

  return (
    <div className="App">
      <Search onSubmit={githubResults => setSearchResults(githubResults)}></Search>

     {reposToRender}
    </div>
  );
}

export default App;
