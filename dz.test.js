import {zodiacSign, people} from "./dz";

test("ZodiacSign", () => {
    const result = zodiacSign(people)
    expect(result).toBe("дева")
})
