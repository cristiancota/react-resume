import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Sidebar() {
  library.add(fab);

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
              return (
                <span key={skill.name} className="badge badge-light mr-2">
                  {skill.name}
                </span>
              );
            })}
          </p>
        </div>
        <div className="social">
          <h5 className="heading">social</h5>
          <ul className="list-unstyled">
            {resume.personalInfo.social.map((socialItem) => {
              return (
                <li key={socialItem.displayText}>
                  <a
                    href={socialItem.url}
                    target="_blank"
                    className="text-white"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={['fab', socialItem.icon]} />{' '}
                    {socialItem.displayText}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="languages">
          <h5 className="heading">languages</h5>
          <ul className="list-unstyled">
            {resume.languages.map((language) => {
              return (
                <li key={language.name}>
                  <h6>{language.name}</h6>
                  <span>
                    <i>{language.level}</i>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
