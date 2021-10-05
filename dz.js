export const people = {
    month: 9,
    day: 23,
    name: "Roma"
}

export function zodiacSign(people) {
        if ((people.month === 12 && 22 <= people.day <= 31) || (people.month === 1 && 0 <= people.day <= 20)) {
            return("козерог")
        } else if (((people.month === 1) && (21 <= people.day && people.day <= 31)) || ((people.month === 2) && (0 <= people.day && people.day <= 18))) {
            return("водолей")
        } else if (((people.month === 2) && (19 <= people.day && people.day <= 31)) || ((people.month === 3) && (0 <= people.day && people.day <= 20))) {
            return("рыбы")
        } else if (((people.month === 3) && (21 <= people.day && people.day <= 31)) || ((people.month === 4) && (0 <= people.day && people.day <= 20))) {
            return("овен")
        } else if (((people.month === 4) && (21 <= people.day && people.day <= 31)) || ((people.month === 5) && (0 <= people.day && people.day <= 21))) {
            return("телец")
        } else if (((people.month === 5) && (22 <= people.day && people.day <= 31)) || ((people.month === 6) && (0 <= people.day && people.day <= 21))) {
            return("близнецы")
        } else if (((people.month === 6) && (22 <= people.day && people.day <= 31)) || ((people.month === 7) && (0 <= people.day && people.day <= 22))) {
            return("рак")
        } else if (((people.month === 7) && (23 <= people.day && people.day <= 31)) || ((people.month === 8) && (0 <= people.day && people.day <= 23))) {
            return("лев")
        } else if (((people.month === 8) && (24 <= people.day && people.day <= 31)) || ((people.month === 9) && (0 <= people.day && people.day <= 23))) {
            return("дева")
        } else if (((people.month === 9) && (24 <= people.day && people.day <= 31)) || ((people.month === 10) && (0 <= people.day && people.day <= 23))) {
            return("весы")
        } else if (((people.month === 10) && (24 <= people.day && people.day <= 31)) || ((people.month === 11) && (0 <= people.day && people.day <= 22))) {
            return("скорпион")
        } else if (((people.month === 11) && (23 <= people.day && people.day <= 31)) || ((people.month === 12) && (0 <= people.day && people.day <= 21))) {
            return("стрелец")
        }
}

zodiacSign(people)