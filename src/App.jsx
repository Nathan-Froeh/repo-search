
import './App.scss';
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
  const [searchResults, setSearchResults] = useState(undefined);
  const [error, setError] = useState(null);
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
          <Search 
            onSubmit={githubResults => setSearchResults(githubResults)} 
            onError={error => setError(error)}>
          </Search>
          <section className="message-wrapper">
            {error && 
              <div className="error">
                <h2>Error</h2>
                <p>{error}</p>
              </div>}

            {searchResults === undefined && 
              <p className="message">Try searching for GitHub repos!</p>}

            {searchResults && searchResults.length === 0 && 
              <p className="message">Sorry, no GitHub repos match your search. Try another!</p>}
          </section>
          {reposToRender}
        </Route>

      </Switch>
    </div>
  );
}

export default App;
