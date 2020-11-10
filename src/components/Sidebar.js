import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Sidebar() {
  const { resume } = useContext(ResumeContext);

  return (
    <div className="Sidebar col-3">
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
      <h5 className="heading">summary</h5>
      <p className="text-justify">{resume.summary}</p>
    </div>
  );
}

export default Sidebar;
