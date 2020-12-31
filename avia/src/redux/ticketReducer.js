import { filterTickets } from './filterTickets'
import {  sortByPrice, sortByTime  } from './sortTickets'
import {checkboxesHandler} from './checkboxesHandler'
import { FILTER_TICKETS, SORT_TICKETS_BY_PRICE, SORT_TICKETS_BY_TIME } from './types'


const initialState = {
    tickets: [{
      price: "13401",
      carrier: "Yorha Airlanes",
      segments: [
        {
          origin: "Ebenya",
          destination: "DC",
          date: "December 17, 2020 03:24:00",
          stops: ["JOP", "HUI", "Sosi", "sam sosi", "kek"],
          duration: 100,
        },
        {
          origin: "Ebenya2",
          destination: "DC3",
          date: "December 31, 1995 03:24:00",
          stops: ["JOP", "da", "pizda"],
          duration: 228,
        },
      ],
    },
    {
      price: "13400",
      carrier: "Yoba Airlanes",
      segments: [
        {
          origin: "Ebenya",
          destination: "DC",
          date: "December 17, 1995 03:28:00",
          stops: ["JOP", "HUI"],
          duration: 311,
        },
        {
          origin: "Ebenya2",
          destination: "DC3",
          date: "December 31, 1995 03:12:00",
          stops: ["JOP"],
          duration: 211,
        },
      ],
    },
    {
      price: "13425",
      carrier: "Nahui Airlanes",
      segments: [
        {
          origin: "Ebenya",
          destination: "DC",
          date: "December 17, 1995 03:24:00",
          stops: ["JOP", "HUI"],
          duration: 405,
        },
        {
          origin: "Ebenya2",
          destination: "DC3",
          date: "December 31, 1995 03:24:00",
          stops: ["JOP"],
          duration: 99,
        },
      ],
    },
    {
      price: "14228",
      carrier: "Yorha Airlanes",
      segments: [
        {
          origin: "KURSK",
          destination: "DC",
          date: "December 17, 2020 03:24:00",
          stops: [],
          duration: 100,
        },
        {
          origin: "DC",
          destination: "KURSK",
          date: "December 31, 1995 03:24:00",
          stops: [],
          duration: 228,
        },
      ],
    }],
    switch: null,
    checkboxes: [
      {id: 4, checked: false},
      {id: 0, checked: false},
      {id: 1, checked: false},
      {id: 2, checked: false},
      {id: 3, checked: false}
  ]
}

export const ticketReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FILTER_TICKETS: 
        return {...state, checkboxes: checkboxesHandler(state.checkboxes, action.payload), tickets: filterTickets(state.tickets, action.payload)}
        case SORT_TICKETS_BY_TIME:
        return {...state, switch:'right', tickets: sortByTime(state.tickets)}
        case SORT_TICKETS_BY_PRICE:
        return {...state, switch:'left', tickets: sortByPrice(state.tickets)}
        default: return state
    }
}