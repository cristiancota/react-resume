import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Summary() {
  const { resume } = useContext(ResumeContext);

  return <div className="Summary">{}</div>;
}

export default Summary;
