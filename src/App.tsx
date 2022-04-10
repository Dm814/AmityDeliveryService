import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RoutesFacade} from "./domain/RoutesFacade";
import CalculatedCosts from "./components/result";
import {createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";
import formData, {CalculateFormState} from "./reducers/formData";
import DeliveryDataForm from "./components/delivery-data-form";




function App() {

    const dispatch = useDispatch()
    const routesWithCosts = useSelector((state: any) => state.formData.routesWithCosts)
    const routeToCalculate = useSelector((state: any) => state.formData.routeToCalculate)
    console.log(routesWithCosts)
    console.log(routeToCalculate)

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
