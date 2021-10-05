import {distance, car} from "./dz2";

test("distance", () => {
        const result = distance(car)
        expect(result).toBe(400)
    }
)