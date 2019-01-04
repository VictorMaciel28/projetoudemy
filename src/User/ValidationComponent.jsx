import React, { Component } from 'react';

class ValidationComponent extends Component{
  state ={
    mensagem : ""
  }
    
 render() {
   
  
  let validationmensage =null;
   if (this.props.inputlentgh<5){
    validationmensage = "Lentgh too short"
   }else{
     validationmensage="Lentgh ok"
   }

   

   return(
    <div>
      <p>{this.props.inputlentgh}</p>
      <p>{validationmensage}</p>
    </div>
    )  
  }
}

export default ValidationComponent;