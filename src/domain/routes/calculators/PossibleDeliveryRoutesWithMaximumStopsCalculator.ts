import {Graph} from "../graph/Graph";
import {Edge} from "../graph/Edge";
import {PathUtil} from "./PathUtil";

export class PossibleDeliveryRoutesWithMaximumStopsCalculator {
    private allPath: string[] = [];
    private to: number = 0;
    private stops: number = 0;
    private graph: Graph;

    constructor(graph: Graph) {
        this.graph = graph;
    }

    public calculate(from: string, to: string, stops: number): number{
        this.allPath = [];
        this.to = Graph.getIndex(to);
        this.stops = stops;
        let startIndex: number = Graph.getIndex(from);
        this.calculateAllPath(startIndex, startIndex.toString());

        return this.allPath.length;
    }

    private calculateAllPath(from: number, path: string): void {
        let edges: Edge[] = this.graph.getEdgeList(from);
        for (let e of edges) {

            if (PathUtil.isVisited(path, e))
                continue;

            let next: string = path + e.to;
            let stopCount: number = next.length-1;

            if (stopCount > this.stops) {
                return;
            }

            if (this.to == e.to) {
                this.allPath.push(Graph.getPathName(next));
            }

            this.calculateAllPath(e.to, next);
        }
    }
}