export let room = {
    length: 5,
    wifth: 4,
    height: 3,
    rollWidth: 0.5,
    rollLength: 7
}

export function wallpaperVolume(room) {
    let volume = undefined
    volume = (room.length * room.wifth * room.height) / (room.rollWidth*room.rollLength)
    return Math.ceil (volume)
}

wallpaperVolume(room)
