import React, {useState} from 'react';
import {search} from '../apiCalls';

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
    <form id="search" onSubmit={getSearchResults}>
      <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}
export default (Search);