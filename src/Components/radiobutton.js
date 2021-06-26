import React from 'react';
const RadioButton =({name,DropdownValues})=>(
    <span className="bigblue" >
      {name}
         { DropdownValues.map((planet) =>
               <span><input type='radio' key={planet.Value} value={planet.DisplayValue} /> 
                <label>{ planet.DisplayValue}</label></span>
       
               )
          }
           
        
    </span>
);
export default RadioButton;