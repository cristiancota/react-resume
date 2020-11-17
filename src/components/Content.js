import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import DateRange from './components/DateRange';

function Content() {
  const { resume } = useContext(ResumeContext);

  const experienceContent = resume.experience.map((exp) => {
    return (
      <div className="mt-3" key={exp.company}>
        <h5>
          {exp.company}{' '}
          <small className="ml-2">
            <DateRange
              start={exp.dateStart}
              end={exp.dateEnd}
              format="MMM YYYY"
            />
          </small>
        </h5>
        <p>
          <i>{exp.title}</i>
        </p>
        <ul className="list pl-0">
          {exp.responsabilities.map((responsability) => (
            <li key={responsability}>{responsability}</li>
          ))}
        </ul>
      </div>
    );
  });

  const educationContent = resume.education.map((educationItem) => {
    return (
      <div className="mt-3" key={educationItem.institution}>
        <h5>
          {educationItem.institution}{' '}
          <small className="ml-2">
          <DateRange
              start={educationItem.dateStart}
              end={educationItem.dateEnd}
              format="MMM YYYY"
            />
          </small>
        </h5>
        <p>{educationItem.degree}</p>
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
