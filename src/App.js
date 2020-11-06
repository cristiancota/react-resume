import React from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';
import { ResumeContext } from './context/ResumeContext';
import resume from './data/resume.json';

function App() {
  return (
    <div className="resumeApp">
      <ResumeContext.Provider value={{ resume }}>
        <Summary />
        <Sidebar />
        <Content />
      </ResumeContext.Provider>
    </div>
  );
}

export default App;
