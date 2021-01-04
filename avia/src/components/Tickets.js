import React from "react";
import Ticket from "./Ticket.js";
import {connect} from 'react-redux'

const Tickets = ({tickets}) => {
    
  return tickets.map((ticket, i) => {
        return (
          <Ticket
            key={i}
            ticket={ticket}
            segments={ticket.segments}
          />
          )
        }
      )
    } 

const mapStateToProps = (state) => {
    return {
      tickets: state.tickets.tickets,
    }
  }

export default connect(mapStateToProps, null)(Tickets)
