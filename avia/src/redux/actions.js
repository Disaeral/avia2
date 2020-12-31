import { FILTER_TICKETS, SORT_TICKETS_BY_PRICE, SORT_TICKETS_BY_TIME } from "./types";

export function sortTicketsByPrice () {
    return {
        type:SORT_TICKETS_BY_PRICE
    }
}
export function sortTicketsByTime () {
    return {
        type:SORT_TICKETS_BY_TIME
    }
}
export function filterTickets (checkboxID) {
    return {
        type: FILTER_TICKETS,
        payload: checkboxID
    }   
}


