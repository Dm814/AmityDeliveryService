import {Graph} from "../graph/Graph";
import {Edge} from "../graph/Edge";
import {PathUtil} from "./PathUtil";

export class PossibleDeliveryRoutesCalculator {
    private allPath: string[] = [];
    private to: number = 0;
    private graph: Graph;

    constructor(graph: Graph) {
        this.graph = graph;
    }

    public calculate(from: string, to: string): number {
        this.to = Graph.getIndex(to);
        let startIndex = Graph.getIndex(from);
        this.calculateAllPath(startIndex, startIndex.toString());

        return this.allPath.length;
    }

    private calculateAllPath(from: number, path: string) {
        let edges: Edge[] = this.graph.getEdgeList(from);
        for (let e of edges) {

            if (PathUtil.isVisited(path, e))
                continue;

            let next = path + e.to;

            if (this.to == e.to)
                this.allPath.push(Graph.getPathName(next));

            this.calculateAllPath(e.to, next);
        }
    }
}