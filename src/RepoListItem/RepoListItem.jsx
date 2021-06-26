
import './RepoListItem.scss';

function RepoListItem({repo, selectRepo}) {
  let languages = (<div className="language">No Language Listed</div>);

  if(repo.language) {
    languages = repo.language.split(" ").map(language => (
      <div className="language" key={language}>{language}</div>
    ))
  }

  return (
    <div className="repo-list-item card" onClick={() => selectRepo(repo)}>
      <div className="header">
        <h3 className="name">{repo.full_name}</h3>
        <p className="stars">{repo.stargazers_count}</p>
        <p className="date-updated">Updated {repo.updated_at}</p>
      </div>

      <div className="main">
        <p>{repo.description}</p>
      </div>

      <div className="footer">
        {languages}
      </div>
    </div>
  )
}

export default (RepoListItem);