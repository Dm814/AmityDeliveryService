export class Edge {
    private readonly _from: number;
    private readonly _to: number;
    private readonly _weight: number;

    constructor(from: number, to: number, weight: number) {
        this._from = from;
        this._to = to;
        this._weight = weight;
    }

    get from(): number {
        return this._from;
    }

    get to(): number {
        return this._to;
    }

    get weight(): number {
        return this._weight;
    }
}