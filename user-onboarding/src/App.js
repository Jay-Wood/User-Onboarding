import React from 'react';
import './App.css';
import FormikOnboardForm from "./UserOnboardingForm";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>User Onboarding with React</h3> 
      </header>
      <div className="App-body">
      <FormikOnboardForm />
      </div>

    </div>
  );
}

export default App;
