import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to iCard!</h1>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;