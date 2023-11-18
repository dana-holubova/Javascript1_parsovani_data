const parseDate = (date) => {
    const date_parsed = {
        day: date.slice(0, 2),
        month: date.slice(3, 5),
        year: date.slice(6, 10)
    }
    return date_parsed
}

console.log(parseDate('18.11.2023'))