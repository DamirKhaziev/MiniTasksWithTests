let sum = 100
let coffee1 = {
    name: "threeInOne",
    price: 30
}
let coffee2 = {
    name: "blackCoffee",
    price: 35
}
let coffee3 = {
    name: "coffeeWithCream",
    price: 40
}
let coffee4 = {
    name: "latte",
    price: 45
}
let coffees = [coffee1, coffee2, coffee3, coffee4]

function change(data) {
    let change
    if (sum <= 100) {
        change = sum - data.price
        return (change)
    }
    else {
        console.log("error")
    }
}

change(coffee1)