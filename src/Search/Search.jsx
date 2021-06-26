import React, {useState} from 'react';
import {search} from '../apiCalls';
import './Search.scss'

function Search(props) {
  const [searchValue, setSearchValue] = useState('');

  function getSearchResults(event) {
    event.preventDefault();
    const searchParams = {
      q: searchValue
    }
    search(searchParams).then(githubResults => {
      props.onSubmit(githubResults.data.items)
      console.log('search results', githubResults)
    })
  }

  return (
    <section className="search">
      <h1 className="main-logo">RepoSearch</h1>
      <h1 className="mobile-logo">RS</h1>
      <form onSubmit={getSearchResults}>
        <section className="search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchValue} 
            onChange={e => setSearchValue(e.target.value)}/>
          <button type="submit">Submit</button>
        </section>
        <section className="search-settings">
          coming soon
        </section>
      </form>
    </section>
  )
}
export default (Search);