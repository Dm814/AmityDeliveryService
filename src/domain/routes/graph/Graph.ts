import {Edge} from "./Edge";

export class Graph {
    private static vertexList = ["A", "B", "C", "D", "E", "F"];
    private readonly edgeListArray: Edge[][];

    constructor(edgeList: Edge[]) {
        this.edgeListArray = [];

        for (let i = 0; i < Graph.vertexList.length; i++)
            this.edgeListArray[i] = [];

        for (let edge of edgeList) {
            this.edgeListArray[edge.from].push(edge);
        }
    }

    public getEdgeList(v: number): Edge[] {
        return this.edgeListArray[v];
    }

    public static getIndex(vertex: string): number {
        return Graph.vertexList.indexOf(vertex);
    }

    private static getVertexName(index: number): string{
        return Graph.vertexList[index];
    }

    public static getPathName(path: string): string {
        let arr = path.trim().split("");
        let name = "";
        for(let v of arr) {
            name += this.getVertexName(parseInt(v));
        }

        return name;
    }
}