import './App.css';
import React,{Fragment,useState, useRef} from 'react';
import HeaderApp from './headerApp.js';
import Boards from './boards.js';

function App() {
  const board = [];
  for(let i = 0; i<100;i++){
    board.push({id:i+1,
      color:"#FFF"});
  }
  const [selectcolor,setselectcolor] = useState();
  const [boardilust,setboardilust] = useState(board);
  const ilustration = useRef();
  const making = useRef();
  return (
    <div className="supercontainer">
      <HeaderApp selectcolor={selectcolor} setselectcolor={setselectcolor} setboardilust={setboardilust} ilustration={ilustration} making={making}/>
      <main className="main">
        <Boards selectcolor={selectcolor} boardilust={boardilust} setboardilust={setboardilust} ilustration={ilustration}making={making}/>
      </main>
    </div>
  );
}

export default App;