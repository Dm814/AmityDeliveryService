export interface ResultAction {
    type: string,
    payload: ResultState
}

export type ResultState = {
    distanceCalculatorWithError: string,
    possibleDeliveryRoutesWithMaximumStops: string,
    possibleDeliveryRoutes: string,
    possibleDeliveryRoutesWithDeliveryCost: string
}

export const defaultResultState: ResultState = {
    distanceCalculatorWithError: "",
    possibleDeliveryRoutesWithMaximumStops: "",
    possibleDeliveryRoutes: "",
    possibleDeliveryRoutesWithDeliveryCost: ""
}

export default function results(state: ResultState = defaultResultState, action: ResultAction) {
    switch (action.type) {
        case "CALCULATE":
            return {...state,
                distanceCalculatorWithError: action.payload.distanceCalculatorWithError,
                possibleDeliveryRoutesWithMaximumStops: action.payload.possibleDeliveryRoutesWithMaximumStops,
                possibleDeliveryRoutes: action.payload.possibleDeliveryRoutes,
                possibleDeliveryRoutesWithDeliveryCost: action.payload.possibleDeliveryRoutesWithDeliveryCost}
        default:
            return state
    }
}