import React from 'react';
import './App.css';
import OnboardForm from "./UserOnboardingForm";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>User Onboarding with React</h3> 
      </header>
      <div className="App-body">
      <OnboardForm />
      </div>

    </div>
  );
}

export default App;
