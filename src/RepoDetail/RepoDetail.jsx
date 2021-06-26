
import {useHistory} from "react-router-dom";
import './RepoDetail.scss';
import {DateTime} from 'luxon';


function RepoDetail({repo}) {
  let history = useHistory();
  let languages = (<div className="language">No Language Listed</div>);
  function goBack() {
    history.push('/');
  }
  if(!repo) goBack();
  if(repo && repo.language) {
    languages = repo.language.split(" ").map(language => (
      <div className="language" key={language}>{language}</div>
    ))
  }

  return (
    <div className="repo-detail">

      <div className="repo-detail-header">
        <button className="back" onClick={goBack}>Back</button>

        <a href="https://github.com/Nathan-Froeh/repo-search" target="_blank" rel="noreferrer">
          Check out my repo
        </a>
      </div>

    {
      repo &&
      <div className="repo card">
        <section className="header">
          <div className="image-wrapper">
            <img src={repo.owner.avatar_url} alt="avatar"/>
            <h3 className="name">{repo.full_name}</h3>
          </div>
          <div>
            <p className="stars">{repo.stargazers_count} Stars</p>
            <p className="date-updated">
              Updated {DateTime.fromJSDate(new Date(repo.updated_at)).toRelative()}
            </p>
          </div>
        </section>
        {languages}

        <section>
          <p>{repo.description}</p>
        </section>

        <section className="footer">
          <a href={repo.html_url} target="_blank" rel="noreferrer">View Repo</a>
        </section>
      </div>

    }
    </div>
  )
}

export default RepoDetail;