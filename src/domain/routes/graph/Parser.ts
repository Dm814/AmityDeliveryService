import {Edge} from "./Edge";
import {Graph} from "./Graph";

export class Parser {

    public static getEdgeList(pathsWithCost: string): Edge[] {
        let list: Edge[] = [];
        let inputArr = pathsWithCost.split(",");

        for (let s of inputArr) {
            s = s.trim();
            let from = Graph.getIndex(s.substr(0, 1));
            let to = Graph.getIndex(s.substr(1, 1));
            let weight = parseInt(s.substr(2));
            let edge = new Edge(from, to, weight);
            list.push(edge);
        }

        return list;
    }
}