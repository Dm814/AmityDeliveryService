import React from 'react';
import './App.css';
import CalculatedCosts from "./components/result";
import DeliveryDataForm from "./components/delivery-data-form";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <DeliveryDataForm />
          <CalculatedCosts />
      </header>
    </div>
  );
}

export default App;
