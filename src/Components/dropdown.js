import React from 'react';
const DropdownSelect =({name,name1,DropdownValues,_handleChange})=>(
    <div className="bigblue">
        {name}
        <select className="select" name={name} onChange={_handleChange}>
            
       { DropdownValues.map((planet) =>
                <option key={planet.Value}>{planet.DisplayValue}</option>
            )
       }
           
        </select>
        
    </div>
);
export default DropdownSelect;