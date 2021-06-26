
import './App.css';
import React, {useState} from 'react';
import Search from './Search/Search';
import RepoListItem from './RepoListItem/RepoListItem';
import RepoDetail from './RepoDetail/RepoDetail';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function App(props) {
  let history = useHistory();
  const [selectedRepo, setSelectedRepo] = useState();
  const [searchResults, setSearchResults] = useState([]);
  let reposToRender;

  if(searchResults) {
    reposToRender = searchResults.map(repo => (
        <RepoListItem repo={repo} selectRepo={selectRepo} key={repo.id}></RepoListItem>
      ))
    }

  function selectRepo(repo) {
    setSelectedRepo(repo)
    history.push(`/repo/:${repo.id}`);
    console.log('repo', repo)
  }

  return (
    <div className="App">
      <Switch>

        <Route path="/repo">
          <RepoDetail repo={selectedRepo}></RepoDetail>
        </Route>

        <Route exact path="/">
          <Search onSubmit={githubResults => setSearchResults(githubResults)}></Search>
          {reposToRender}
        </Route>

      </Switch>
    </div>
  );
}

export default App;
