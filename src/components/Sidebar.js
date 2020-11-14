import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Sidebar() {
  const { resume } = useContext(ResumeContext);

  return (
    <div className="Sidebar col-md-4">
      <div className="pr-3 pl-3">
        <div className="name text-center">
          <h2>
            {resume.personalInfo.firstName}
            <br />
            {resume.personalInfo.lastName}
          </h2>
          <p className="title">
            <i>{resume.personalInfo.title}</i>
          </p>
        </div>
        <div className="photo">
          <img
            src={resume.personalInfo.photo}
            alt="Cristian Cota"
            className="img-fluid rounded-circle border"
          />
        </div>
        <div className="summary">
          <h5 className="heading">summary</h5>
          <p className="text-justify">{resume.summary}</p>
        </div>
        <div className="skills">
          <h5 className="heading">skills</h5>
          <p>
            {resume.skills.map((skill) => {
              return <span class="badge badge-light mr-2">{skill.name}</span>;
            })}
          </p>
        </div>
        <div className="social">
          <h5 className="heading"></h5>
          {resume.personalInfo.social.map((socialItem) => {
            return <p>{socialItem.displayText}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
