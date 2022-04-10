import React from "react";
import {useSelector} from "react-redux";

const CalculatedCosts = () => {
    const distanceCalculatorWithError = useSelector((state: any) => state.results.distanceCalculatorWithError);
    const possibleDeliveryRoutesWithMaximumStops = useSelector((state: any) => state.results.possibleDeliveryRoutesWithMaximumStops);
    const possibleDeliveryRoutes = useSelector((state: any) => state.results.possibleDeliveryRoutes);
    const possibleDeliveryRoutesWithDeliveryCost = useSelector((state: any) => state.results.possibleDeliveryRoutesWithDeliveryCost);

    return (
        <>
            <h2>Results of calculating</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>distanceCalculatorWithError</td>
                            <td>{distanceCalculatorWithError}</td>
                        </tr>
                        <tr>
                            <td>possibleDeliveryRoutesWithMaximumStops</td>
                            <td>{possibleDeliveryRoutesWithMaximumStops}</td>
                        </tr>
                        <tr>
                            <td>possibleDeliveryRoutes</td>
                            <td>{possibleDeliveryRoutes}</td>
                        </tr>
                        <tr>
                            <td>possibleDeliveryRoutesWithDeliveryCost</td>
                            <td>{possibleDeliveryRoutesWithDeliveryCost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <br/>
        </>
    );
}

export default CalculatedCosts;