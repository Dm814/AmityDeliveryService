export interface Action {
    type: string,
    payload: string
}

export type CalculateFormState = {
    routesWithCosts: string,
    routeToCalculateCase1: string
    routeToCalculateCase2: string
}

export const defaultCalculateFormState: CalculateFormState = {
    routesWithCosts: "AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1",
    routeToCalculateCase1: "ABE",
    routeToCalculateCase2: "EE",
}

export default function formData(state: CalculateFormState = defaultCalculateFormState, action: Action) {

    switch (action.type) {
        case "CHANGE_ROUTES_WITH_COSTS":
            return {...state, routesWithCosts: action.payload}
        case "CHANGE_ROUTE_TO_CALCULATE_CASE_1":
            return {...state, routeToCalculateCase1: action.payload}
        case "CHANGE_ROUTE_TO_CALCULATE_CASE_2":
            return {...state, routeToCalculateCase2: action.payload}
        default:
            return state
    }
}