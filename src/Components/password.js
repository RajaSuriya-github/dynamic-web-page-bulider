import React from 'react';

const InputField1 = ({name,Size, _handlechange}) =>(
    <div >
        <label className="bigblue">{name}</label>
        <input
        className="inputbox2"
        type="password"
        name={name}
        size={Size}
        pattern="\w{8}" title="8 character password"
        onChange={_handlechange}
        />
    </div>
);
export default InputField1;