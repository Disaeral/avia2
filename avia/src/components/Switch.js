import React from "react";
import { useDispatch } from 'react-redux'
import { sortTicketsByPrice, sortTicketsByTime, switchLeft, switchRight } from "../redux/actions.js";
import {connect} from 'react-redux'


const Switch = ({switchState}) => {
    let classListL = ['Switch-disabled left']
    let classListR = ['Switch-disabled right']
    
    if (switchState === 'left') {
        classListL = []
        classListL = ['Switch-active left']
        
    } else if (switchState === 'right') {
        classListR = []
        classListR = ['Switch-active right']
    }
//create two arrays for buttons
    const dispatch = useDispatch()
    return <div className="Switch">
        <span className={classListL} 
        onClick={()=>{dispatch(sortTicketsByPrice()); dispatch(switchLeft())}}>
            cheap
        </span>
        <span className={classListR} onClick={()=>{dispatch(sortTicketsByTime()); dispatch(switchRight())}}>
            fast
        </span>
        
      </div>
}
 const mapStateToProps = (state) => {
     
     return {
         switchState: state.switch.switch
     }
 }

 export default connect(mapStateToProps, null)(Switch)