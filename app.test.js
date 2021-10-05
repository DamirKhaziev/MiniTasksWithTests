import {purchase, sales} from "./app";

test("it should add two numbers", () => {
    const result = purchase(sales)
    expect(result).toBe(8500)
})