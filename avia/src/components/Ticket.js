import React from "react";
import Segment from "./Segment.js";



function Ticket({ ticket, segments }) {

  
  let i = 0;
  function forTransfers (segment) {
    if (segment.stops.length === 1) {
      return 'пересадка'
    }
    if (segment.stops.length >=2 && segment.stops.length <= 4) {
      return 'пересадки'
    }
    if (segment.stops.length > 4) {
      return 'пересадок'
    }
    if (segment.stops.length === 0) {
      return 'Без пересадок'
    }
  }
  return (
    <div className="Ticket" >
      <div className="Ticket-header">
        <div className="Cost">{ticket.price} P</div>
        <div className="Logo">
          {ticket.carrier}
          <img
            alt="No Internet"
            src="https://i.mycdn.me/image?id=811774253153&plc=WEB&tkn=*JCBZ6BS_REyd9Aa37kahrMxKrTE&fn=sqr_288"
            height="36px"
          />
        </div>
      </div>
      
      
       { segments.map((segment) => {
        i++;
        
        return (
          <Segment
            key={i - 1}
            segment={segment}
            forTransfers={forTransfers(segment)}
          />)
        })}    
    </div>
  )
}





export default Ticket;

