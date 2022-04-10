import React, {FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RoutesFacade} from "../../domain/RoutesFacade";
import './delivery-data-form.css';

const DeliveryDataForm = () => {
    const dispatch = useDispatch()
    const routesWithCosts = useSelector((state: any) => state.formData.routesWithCosts)
    const routeToCalculateCase1 = useSelector((state: any) => state.formData.routeToCalculateCase1)
    const routeToCalculateCase2 = useSelector((state: any) => state.formData.routeToCalculateCase2)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        let distanceCalculatorWithError = RoutesFacade.distanceCalculatorWithError(routesWithCosts, routeToCalculateCase1);

        let possibleDeliveryRoutesWithMaximumStops = RoutesFacade
            .possibleDeliveryRoutesWithMaximumStops(routesWithCosts,
                routeToCalculateCase2.substr(0, 1),
                routeToCalculateCase2.substr(1, 1), 4);

        let possibleDeliveryRoutes = RoutesFacade
            .possibleDeliveryRoutes(routesWithCosts,
                routeToCalculateCase2.substr(0, 1),
                routeToCalculateCase2.substr(1, 1));

        let possibleDeliveryRoutesWithDeliveryCost = RoutesFacade
            .possibleDeliveryRoutesWithDeliveryCost(routesWithCosts,
                routeToCalculateCase2.substr(0, 1),
                routeToCalculateCase2.substr(1, 1), 20);


        dispatch({type: "CALCULATE", payload: {
                distanceCalculatorWithError: distanceCalculatorWithError,
                possibleDeliveryRoutesWithMaximumStops: possibleDeliveryRoutesWithMaximumStops,
                possibleDeliveryRoutes: possibleDeliveryRoutes,
                possibleDeliveryRoutesWithDeliveryCost: possibleDeliveryRoutesWithDeliveryCost,
            }})
    }

    const setRoutesWithCosts = (value: string) => {
        dispatch({type: "CHANGE_ROUTES_WITH_COSTS", payload: value})
    }

    const setRouteToCalculateCase1 = (value: string) => {
        dispatch({type: "CHANGE_ROUTE_TO_CALCULATE_CASE_1", payload: value})
    }

    const setRouteToCalculateCase2 = (value: string) => {
        dispatch({type: "CHANGE_ROUTE_TO_CALCULATE_CASE_2", payload: value})
    }

    return (
        <div>
            <h2>Amity Delivery Service</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    Enter routes with costs
                    <input onChange={ (event) => setRoutesWithCosts(event.target.value) }
                           type={"text"}
                           defaultValue={routesWithCosts} />
                </div>
                <div>
                    Enter a route to calculate (Case 1)
                    <input onChange={ (event) => setRouteToCalculateCase1(event.target.value) }
                           type={"text"}
                           defaultValue={routeToCalculateCase1} />
                </div>
                <div>
                    Enter a route to calculate (Case 2)
                    <input onChange={ (event) => setRouteToCalculateCase2(event.target.value) }
                           type={"text"}
                           defaultValue={routeToCalculateCase2} />
                </div>
                <button className="btn">Calculate</button>
            </form>
        </div>
    );
};

export default DeliveryDataForm;