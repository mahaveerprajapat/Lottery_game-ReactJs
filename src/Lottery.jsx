import { useState } from "react";
import "./Lottery.css";
import { genTicket} from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n=3,winCondition}){

    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }
    return ( <div className="Container">
        <h1 style={{color:"pink"}}>Lottery game!</h1>
        
        <Ticket ticket={ticket}/>
        {isWinning && <h2 style={{border:"2px solid pink", borderRadius:"15px",padding:"15px 0px",color:"pink"}}>Congratulation,You Win!</h2>} <br /><br />
        <button onClick={buyTicket} style={{border:"2px solid pink",color:"pink"}}>buy New Ticket</button>
    </div> );
}