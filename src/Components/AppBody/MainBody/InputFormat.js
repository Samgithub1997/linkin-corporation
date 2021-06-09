import React from 'react';
import './InputFormat.css';

function InputFormat(props) {
    return (
        <div className="inputformat">
            <props.icon />
            <div>{props.title}</div>
        </div>
    )
}

export default InputFormat
