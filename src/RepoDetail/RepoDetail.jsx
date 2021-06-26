
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

      <button className="back" onClick={goBack}>Back</button>

    {
      repo &&
      <div className="repo card">
        <section className="header">
          <h3 className="name">{repo.full_name}</h3>
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
      </div>

    }
    </div>
  )
}

export default RepoDetail;