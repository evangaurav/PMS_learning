import React from 'react';

import Header from "./components/Header/Header";
import Taskgrid from "./components/TaskGrid/TaskGrid"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Taskgrid />
    </div>
  );
}

export default App;
