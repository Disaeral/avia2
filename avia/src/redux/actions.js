import { CHECK_CHECKBOX, FILTER_TICKETS, LOAD_TICKETS, REQUEST_TICKETS, RESET_FILTER, SORT_TICKETS_BY_PRICE, SORT_TICKETS_BY_TIME, SWITCH_LEFT, SWITCH_RIGHT, UNCHECK_CHECKBOX } from "./types";

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
export function resetFilter () {
    return {
        type: RESET_FILTER
    }
}
export function switchLeft () {
    return {
        type: SWITCH_LEFT
       
    }
}
export function switchRight () {
    return {
        type: SWITCH_RIGHT
        
    }
}
export function check (checkboxID) {
    return {
        type: CHECK_CHECKBOX,
        payload: checkboxID
    }
}
export function uncheck (checkboxID) {
    return {
        type:UNCHECK_CHECKBOX,
        payload: checkboxID
    }
}
export function requestTickets () {
    return {
        type: REQUEST_TICKETS
    }
}
export function loadTickets (payload) {
    return {
        type: LOAD_TICKETS,
        payload,
    }
}
   /* return async dispatch => {
        let allTickets = []
        const response = await fetch("https://front-test.beta.aviasales.ru/search")
        let searchId = await response.json()
            searchId = searchId.searchId
        const data = await requesting(searchId)
        console.log(data)
        if (data.stop) {
        dispatch({
            type: LOAD_TICKETS,
            payload: data
        })
        }
        else {
            allTickets.push(data.tickets)
            console.log(allTickets, 'all')
            requesting(searchId)
            loadTickets()
        }       
    }
}
async function requesting (searchId) {
    const request = await fetch("https://front-test.beta.aviasales.ru/tickets?"+ new URLSearchParams({searchId: searchId.toString()}))
    const data = await request.json()
    return data
}*/