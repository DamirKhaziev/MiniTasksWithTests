export const sales = [1000, 2000, 500, 5000]

export function purchase(sales) {
    let purchases = 0
    for (let item of sales) {
        purchases = purchases + item
    }
    return purchases
}

const sum = purchase(sales)
console.log(sum)
