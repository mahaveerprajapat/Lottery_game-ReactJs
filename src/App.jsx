
import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'

function App() {
  let winCondition = (ticket)=>{
    return sum(ticket)=== 15;
    // return sum(ticket)=== 18;
    // return ticket.every((num)=>num === ticket[0]);
    // return ticket[0] == 0;
    // return (ticket[0] == 0 && ticket[2] == 0);
    // return (ticket[0] == 0 && ticket[1] == 0);
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
      {/* <Lottery n={4} winCondition={winCondition}/> */}
    </>
  )
}

export default App
