import {RoutesFacade} from "../domain/RoutesFacade";

test('renders learn react link', () => {
    let pathsWithCost = "AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1";

    expect(RoutesFacade.distanceCalculatorWithError(pathsWithCost, "ABE").toString()).toEqual("4");
    expect(RoutesFacade.distanceCalculatorWithError(pathsWithCost, "AD").toString()).toEqual("10");
    expect(RoutesFacade.distanceCalculatorWithError(pathsWithCost, "EACF").toString()).toEqual("8");
    expect(RoutesFacade.distanceCalculatorWithError(pathsWithCost,"ADF").toString()).toEqual('No Such Route');
    expect(RoutesFacade.possibleDeliveryRoutesWithMaximumStops(pathsWithCost, "E", "D", 4).toString()).toEqual("4");
    expect(RoutesFacade.possibleDeliveryRoutes(pathsWithCost, "E", "E").toString()).toEqual("5");
    expect(RoutesFacade.possibleDeliveryRoutesWithDeliveryCost(pathsWithCost, "E", "E", 20).toString()).toEqual("29");
});
