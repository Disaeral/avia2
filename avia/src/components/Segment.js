import React from "react";



function Segment({segment, forTransfers}) {
  
    let classes = ["Segment"];
    let durationRaw = segment.duration;
    let durationHours = Math.floor(segment.duration/60)
    let durationMins = Math.floor(segment.duration%60)
    let transfers = segment.stops.length
    if (!transfers) {
      transfers = null
    }
    let departureTime = segment.date.slice(-8, -3);
    let flightHours = parseInt(segment.date.slice(-8, -6 ))+(Math.floor(durationRaw/60));
    let flightMinutes = parseInt(segment.date.slice(-5, -3))+durationRaw%60;
    if (flightMinutes >= 60) {
        flightHours+=(Math.floor(flightMinutes/60));
        flightMinutes=(Math.floor(flightMinutes%60))
        
    }
    if (flightMinutes<10) {
      flightMinutes=`0${Math.round(Math.floor(flightMinutes%60))}`
      
    }
    if (flightHours<10) {
      flightHours=`0${flightHours}`
      
    }
    
    return <div className={classes}>
    
    <div className="Ticket-info">
      <div className="Route">
        <div className="IATA" id="Upper">
          {segment.origin} - {segment.destination}
        </div>
        <div className="Time" id="Lower">
          {departureTime} - {flightHours}:{flightMinutes}
        </div>
      </div>
      <div className="Length">
        <div className="Upper" id="Upper">
          В пути
        </div>
        <div className="Duration" id="Lower">
          {durationHours} ч {durationMins} мин
        </div>
      </div>
      <div className="Stops">
        <div className="Upper" id="Upper">
          {transfers} {forTransfers}
        </div>
        <div className="Lower" id="Lower">
          {segment.stops.join(', ')}
        </div>
      </div>
    </div>
  </div>;
}



export default Segment;
