import React, {useState} from 'react';
import {search} from '../helpers/apiCalls';
import './Search.scss';
import {sortOptions, languages} from '../helpers/objects';

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState(sortOptions[0].value);
  const [sortOrder, setSortOrder] = useState(sortOptions[0].order);
  const [languageValue, setLanguageValue] = useState("");

  function getSearchResults(event, quickSearch) {
    event.preventDefault();
    const searchParams = {
      q: `${quickSearch ? quickSearch : searchValue}${languageValue ? '+language:'+ languageValue : ''}`,
      sort: sortValue,
      order: sortOrder
    };
    search(searchParams)
      .then(githubResults => {
        props.onError(null);
        props.onSubmit(githubResults.data.items)
      }).catch(error => {
        props.onSubmit(null);
        props.onError(error.response.data.message);
        console.error(error)
      })
  }

  function quickSearch() {
    setSearchValue("nathan-froeh/repo-search");
    getSearchResults({preventDefault: () => {}}, "nathan-froeh/repo-search");
  }

  function handleSort(sort) {
    const option = JSON.parse(sort)
    setSortValue(option.value)
    setSortOrder(option.order)
  }

  return (
    <section className="search">
      <h1 className="main-logo" onClick={quickSearch}>RepoSearch</h1>
      <h1 className="mobile-logo" onClick={quickSearch}>RS</h1>
      <form onSubmit={getSearchResults}>
        <section className="search-bar">
          <input 
            type="text" 
            autoFocus
            placeholder="Search" 
            value={searchValue} 
            onChange={e => setSearchValue(e.target.value)}/>
          <button type="submit">Search</button>
        </section>
        <section className="search-settings">
          <div>
            <label htmlFor="sort">Sort</label>
            <select name="sort" id="sort" onChange={e => handleSort(e.target.value)}>
              {sortOptions.map(option => (
                <option value={JSON.stringify(option)} key={option.name}>{option.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="language">Languages</label>
            <select name="language" id="language" onChange={e => setLanguageValue(e.target.value)}>
              <option value="">None</option>
              {languages.map(option => (
                <option value={option.value} key={option.value}>{option.name}</option>
              ))}
            </select>
          </div>
        </section>
      </form>
    </section>
  )
}
export default Search;