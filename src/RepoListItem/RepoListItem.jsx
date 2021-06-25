
import './RepoListItem.scss';

function RepoListItem({repo}) {
  let languages = (<div className="language">None</div>);

  if(repo.language) {
    languages = repo.language.split(" ").map(language => (
      <div className="language">{language}</div>
    ))
  }

  return (
    <div className="repo-list-item">
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