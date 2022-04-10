import {Graph} from "../graph/Graph";

export class DistanceCalculator {
    private graph: Graph;

    constructor(graph: Graph) {
        this.graph = graph;
    }

    public calculate(route: string): number {
        let distance = 0;
        let vertex = route.trim().split("");
        let from, to;

        for (let i = 0; i < vertex.length-1;) {
            let hasPath = false;
            from = Graph.getIndex(vertex[i++]);
            to = Graph.getIndex(vertex[i]);
            let edgeList = this.graph.getEdgeList(from);
            for (let edge of edgeList)
                if (edge.to == to) {
                    distance += edge.weight;
                    hasPath = true;
                    break;
                }
            if(!hasPath) return -1;
        }

        return distance;
    }
}