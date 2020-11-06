import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Sidebar() {
  const { resume } = useContext(ResumeContext);

  return <div className="Sidebar">{}</div>;
}

export default Sidebar;
