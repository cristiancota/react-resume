import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Content() {
  const { resume } = useContext(ResumeContext);

  return (
    <div className="Content col-9">
      <div>
        <h5 className="heading">Professional experience</h5>
      </div>
    </div>
  );
}

export default Content;
