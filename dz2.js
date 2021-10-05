export let car = {
    name: "daewoo",
    fuelConsumption: 5,
    fuelVolume: 20
}

export function distance(car) {
    let consumption
    let volume
        consumption = car.fuelConsumption / 100
        volume = car.fuelVolume / consumption
        return (volume)
}

distance(car)