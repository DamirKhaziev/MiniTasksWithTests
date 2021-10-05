export const scores = [8, 7, 4, 2, 10]

export function minScore(scores) {
    let min = 0
    min = scores [0]
    for (let item of scores) {
        if (item < min) {
            min = item
        }
    }
    return (min)
}

console.log(minScore(scores))
