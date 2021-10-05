export const scores = [8, 7, 4, 2, 10]

export function maxScore(scores) {
    let max = 0
    for (let item of scores) {
        if (item > max) {
            max = item
        }
    }
    return (max)
}

console.log(maxScore(scores))