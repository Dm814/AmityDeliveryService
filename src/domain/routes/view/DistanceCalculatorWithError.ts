import {DistanceCalculator} from "../calculators/DistanceCalculator";

export class DistanceCalculatorWithError {
    private distanceCalculator: DistanceCalculator;

    constructor(distanceCalculator: DistanceCalculator) {
        this.distanceCalculator = distanceCalculator;
    }

    public calculate(route: string, errorMessage: string = "No Such Route"): string {
        let distance: number = this.distanceCalculator.calculate(route);
        return (distance !== -1) ? distance.toString() : errorMessage;
    }
}
