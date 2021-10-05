import {scores, minScore} from "./app4";

test("minScore", () => {
    const result = minScore(scores)
    expect(result).toBe(2)
})