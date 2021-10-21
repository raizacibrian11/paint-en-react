import './headerApp.css';
import html2canvas from 'html2canvas';

const Palleteofcolors = ['#FF1535','#FE0092','#FE00DB','#ED15FF','#9600FE','#5100FE','#1B00FE',' #2E15FF','#0036FE','#008EFE','#00ADFE','#15DFFF','#15FFB8','#55FE00','#15FF2A','#A3FF15','#D1FF15','#F8FF15','#FBFF15','#FFE615','#FFD815','#FFCA15','#FF8E15','#FF6A15','#FF3815','#FFFFFF','#EDEDED','#CBCBCB','#898989','#2F2F2F','#000000'];


function HeaderApp(props){
    const board = [];
    for(let i = 0; i<100;i++){
    board.push({id:i+1,
      color:"#FFF"});
    }

    function Handledrawing(e){
        props.setselectcolor(e.target.name);
    }

    function Newilustration(e){
        props.setboardilust(board);
    }

    function Screenshot(e){
        props.making.current.style.gap='0';
        html2canvas(props.making.current).then(function(canvas) {    
            props.ilustration.current.replaceChild(canvas,props.ilustration.current.firstChild);
        });
    }

    return (
        <header className="header">
           <div className="headerbutton">
               <button className="headerbutton2" onClick={Newilustration}> ¡Nuevo dibujo! </button>
               <button className="headerbutton2" onClick={Screenshot}> Imprimir </button>
           </div> 
           <div className="headertext">
                <h4 className="headertext2"> Elige un color para iniciar a dibujar :) </h4>
           </div>
           <div className="headerbuttoncolor">
               <ul className="listofcolors">
                   {Palleteofcolors.map(color=>{
                    const selection = color === props.selection;
                    const border = selection ? '3px solid #5277da': 'none';
                    return (
                        <li key={color}
                            className="colorit">
                                <button  style={{
                                    backgroundColor: color,
                                    outline: border,
                                    }}    
                                    className="colorbutton"     
                                    onClick={Handledrawing}
                                    name={color}/>
                        </li>
                    );    
                   })}
               </ul>
           </div>
        </header>
    );
}

export default HeaderApp;