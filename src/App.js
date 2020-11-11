import React from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ResumeContext } from './context/ResumeContext';
import resume from './data/resume.json';

function App() {
  return (
    <div className="App container mb-5">
      <ResumeContext.Provider value={{ resume }}>
        <div className="row">
          <Header />
          <Sidebar />
          <Content />
        </div>
      </ResumeContext.Provider>
    </div>
  );
}

export default App;
