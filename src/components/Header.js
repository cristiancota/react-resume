import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

function Header() {
  const { resume } = useContext(ResumeContext);

  return <div className="Header">{}</div>;
}

export default Header;
