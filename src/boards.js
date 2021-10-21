import './boards.css';
import React,{useState,Fragment} from 'react';
import html2canvas from 'html2canvas';

function Boards(props){
    const [flag,setflag] = useState(false);
    function Update(e){
        Setboard(e);
    }
    function Mouseflagd(){setflag(true);}

    function Mouseflagu(){setflag(false);}
    
    function Dragupdate(e){
        if(flag)
            Setboard(e);
    }

    function Setboard(e){
        props.setboardilust(
            props.boardilust.map(item=>{
                if(item.id === Number(e.target.id))
                    item.color = props.selectcolor;
                return item;
            }));
    }

    function Screenshot(e){
        html2canvas(props.making.current).then(function(canvas) {    
            props.ilustration.current.replaceChild(canvas,props.ilustration.current.firstChild);
        });
        
    }
    
    return(
        <Fragment>
            <section className="firstboard" ref={props.ilustration}>
                <div className="contimage">
                    <p><b>No hay imagen :(, dibuja algo :) </b></p>
                    <button className="buttoncont2" onClick={Screenshot}> Imprimir </button>
                </div>
            </section>
            <div 
                className="secondboard"
                onClick={Update}
                onMouseDown={Mouseflagd}
                onMouseUp={Mouseflagu}
                ref={props.making}>
                {props.boardilust.map((item)=>{
                    return(
                        <button 
                        id={item.id} 
                        key={item.id}
                        className="buttonboards"
                        style={{
                            backgroundColor: item.color,
                        }}
                        onMouseOver={Dragupdate}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}

export default Boards;