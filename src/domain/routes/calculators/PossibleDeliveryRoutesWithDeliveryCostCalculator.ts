import {Graph} from "../graph/Graph";
import {DistanceCalculator} from "./DistanceCalculator";
import {Edge} from "../graph/Edge";

export class PossibleDeliveryRoutesWithDeliveryCostCalculator {
    private to: number = 0;
    private maxDistance: number = 0;
    private routesCount: number = 0;
    private graph: Graph;
    private distanceCalculator: DistanceCalculator;

    constructor(graph: Graph, distanceCalculator: DistanceCalculator) {
        this.graph = graph;
        this.distanceCalculator = distanceCalculator;
    }

    public calculate(from: string, to: string, maxDistance: number): number {
        this.to = Graph.getIndex(to);
        this.maxDistance = maxDistance;
        this.routesCount = 0;
        let startIndex = Graph.getIndex(from);
        this.calculateRoutesCount(startIndex, startIndex.toString());

        return this.routesCount;
    }

    private calculateRoutesCount(from: number, path: string): void {
        let edges: Edge[] = this.graph.getEdgeList(from);
        for (let e of edges) {

            let next: string = path + e.to;
            let distance: number = this.distanceCalculator.calculate(Graph.getPathName(next));

            if (this.to == e.to && (distance < this.maxDistance))
                this.routesCount++;

            if (distance < this.maxDistance)
                this.calculateRoutesCount(e.to, next);
        }
    }
}