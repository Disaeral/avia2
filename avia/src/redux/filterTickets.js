export const filterTickets = (tickets, checkboxID) => {
    switch (checkboxID) {
        case 4: return tickets
        case 0: return tickets=>tickets.stops.length===0
        case 1: return tickets=>tickets.stops.length===1
        case 2: return tickets=>tickets.stops.length===2
        case 3: return tickets=>tickets.stops.length>=3
        default: return tickets
    }
   
}