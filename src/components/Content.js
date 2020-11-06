import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Content() {
  const { resume } = useContext(ResumeContext);

  return <div className="Content">{}</div>;
}

export default Content;
