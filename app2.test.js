import {scores, middleBall} from "./app2";

test("middlBall", () => {
    const result = middleBall(scores)
    expect(result).toBe(6.2)
})