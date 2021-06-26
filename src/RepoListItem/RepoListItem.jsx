
import './RepoListItem.scss';
import {DateTime} from 'luxon';

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
        <div>
          <p className="stars">{repo.stargazers_count} Stars</p>
          <p className="date-updated">Updated {DateTime.fromJSDate(new Date(repo.updated_at)).toRelative()}</p>
        </div>
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

export default RepoListItem;