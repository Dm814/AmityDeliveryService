import {Edge} from "../graph/Edge";

export class PathUtil {
    public static isVisited(path: string, e: Edge): boolean {
        return path.length > 1
            && path.substr(1).indexOf(e.to.toString()) !== -1;
    }
}