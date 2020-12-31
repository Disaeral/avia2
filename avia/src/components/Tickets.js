import React from "react";
import Ticket from "./Ticket.js";
import {connect} from 'react-redux'

const Tickets = ({tickets}) => {
    
   return tickets.map(ticket => {
        console.log(ticket, 'ticket in map')
        
        return (
          <Ticket
            key={Date.now().toString()}
            ticket={ticket}
            segments={ticket.segments}
          />
          )
        }
        )
        
}

const mapStateToProps = (state) => {
    console.log(state.tickets.tickets, 'main state')
    
    return {
      tickets: state.tickets.tickets,
      
    }
  }

export default connect(mapStateToProps, null)(Tickets)
