import React from "react";

import { useDispatch} from 'react-redux'
import { sortTicketsByPrice, sortTicketsByTime } from "../redux/actions.js";
import  Tickets  from "./Tickets.js";


function Main() {
  
  
  
  const dispatch = useDispatch()
  return (
    <div className="Main">
      <div className="Switch">
        <div className="Switch-left" onClick={()=>{dispatch(sortTicketsByPrice())}}>
          cheap
        </div>
        <div className="Switch-right" onClick={()=>{dispatch(sortTicketsByTime())}}>
          fast
        </div>
      </div> 
        <Tickets />
    </div>
  );
}



export default Main;
