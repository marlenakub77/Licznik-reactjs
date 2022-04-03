import React from "react";
import './Step.css';


function Step(props) {
    
    // let step = this._inputStep.value;


    return(
        <div className="step"> Krok:
            <input onChange={(event) => props.stepMethod(event.target.value)
            } type="number"/>
        </div>
    );



    // return(
    //     <div className="step"> Krok:
    //         <input ref={(data) => {this.inputStep = data}} type="number"/>
    // //     </div>
    // );

}



export default Step;

// następnie odwołaj się do tego pola w kodzie np. 

// - dodatkowo będziesz musiał się podpiąć pod zdarzenie onChange tego inputa <input ref={(data) => { this._inputStep = data} } onChange{this.updateStep} type="number" /> i gdy jego wartość została zmieniona, to aktualizuj state :) np. this.setState(....);
