import React from 'react';
const InputTextField = ({ name,Size, _handleChange})=>(
    <div >
        <label className="bigblue">{name}</label>
        <input 
        className="inputbox1"
        type="text"
        name={name}
        size={Size}
        onChange={_handleChange}
        />
    </div>
);
export default InputTextField;