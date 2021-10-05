export const scores = [8, 7, 4, 2, 10]
export function middleBall (scores){
    let sumBall = 0
    for (let item of scores){
        sumBall = sumBall+item
    }
    sumBall = sumBall/scores.length
    return (sumBall)
}
middleBall(scores)
console.log (middleBall(scores))