import React from "react";
import "./App.css";
import resume from "./data.json";

function ResumeApp() {
  return <div className="resumeApp">{resume.summary}</div>;
}

export default ResumeApp;
