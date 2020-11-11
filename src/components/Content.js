import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Content() {
  const { resume } = useContext(ResumeContext);

  const experienceContent = resume.experience.map((exp) => {
    return (
      <div className="mt-3">
        <h5>{exp.company}</h5>
        <p>{exp.title}</p>
        <p>
          {exp.dateStart} - {exp.dateEnd ? exp.dateEnd : 'Present'}
        </p>
        <ul class="list-unstyled">
          {exp.responsabilities.map((responsability) => (
            <li>{responsability}</li>
          ))}
        </ul>
      </div>
    );
  });
  const educationContent = resume.education.map((educationItem) => {
    return (
      <div className="mt-3">
        <h5>{educationItem.institution}</h5>
        <p>{educationItem.degree}</p>
        <p>
          {educationItem.dateStart} - {educationItem.dateEnd ? educationItem.dateEnd : 'Present'}
        </p>
      </div>
    );
  });

  return (
    <div className="Content col-md-8">
      <div className="pr-3 pl-3">
        <h5 className="heading">Professional experience</h5>
        {experienceContent}
        <h5 className="heading mt-5">Education</h5>
        {educationContent}
      </div>
    </div>
  );
}

export default Content;
