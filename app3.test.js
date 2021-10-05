import {scores, maxScore} from "./app3";

test("maxScore", () => {
    const result = maxScore(scores)
    expect(result).toBe(10)
})