import TickettNum from "./TickettNUm";
import "./Ticket.css";
export default function Ticket({ticket}){
    return ( <div className="Ticket">
           {ticket.map((num,inx)=>(
            <TickettNum num={num} key={inx}/>
           ))}

    </div> );
}