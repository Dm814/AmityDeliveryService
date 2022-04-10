import {Graph} from "./routes/graph/Graph";
import {Edge} from "./routes/graph/Edge";
import {Parser} from "./routes/graph/Parser";
import {DistanceCalculator} from "./routes/calculators/DistanceCalculator";
import {DistanceCalculatorWithError} from "./routes/view/DistanceCalculatorWithError";
import {PossibleDeliveryRoutesWithMaximumStopsCalculator} from "./routes/calculators/PossibleDeliveryRoutesWithMaximumStopsCalculator";
import {PossibleDeliveryRoutesCalculator} from "./routes/calculators/PossibleDeliveryRoutesCalculator";
import {PossibleDeliveryRoutesWithDeliveryCostCalculator} from "./routes/calculators/PossibleDeliveryRoutesWithDeliveryCostCalculator";

export class RoutesFacade {
    private static createGraph(pathsWithCost: string): Graph {
        let edgeList: Edge[] = Parser.getEdgeList(pathsWithCost);
        return new Graph(edgeList);
    }

    public static distanceCalculatorWithError(pathsWithCost: string, route: string): string {
        let distanceCalculator: DistanceCalculator = new DistanceCalculator(this.createGraph(pathsWithCost));
        let distanceCalculatorWithError: DistanceCalculatorWithError = new DistanceCalculatorWithError(distanceCalculator);

        return distanceCalculatorWithError.calculate(route);
    }

    public static possibleDeliveryRoutesWithMaximumStops(pathsWithCost: string, from: string, to: string, stops: number): number {
        let graph: Graph = this.createGraph(pathsWithCost);

        return new PossibleDeliveryRoutesWithMaximumStopsCalculator(graph).calculate(from, to, stops);
    }

    public static possibleDeliveryRoutes(pathsWithCost: string, from: string, to: string): number {
        let graph: Graph = this.createGraph(pathsWithCost);

        return new PossibleDeliveryRoutesCalculator(graph).calculate(from, to);
    }

    public static possibleDeliveryRoutesWithDeliveryCost(pathsWithCost: string, from: string, to: string, maxDistance:number): number {
        let graph: Graph = this.createGraph(pathsWithCost);

        return new PossibleDeliveryRoutesWithDeliveryCostCalculator(graph, new DistanceCalculator(graph))
            .calculate(from, to, maxDistance);
    }
}
