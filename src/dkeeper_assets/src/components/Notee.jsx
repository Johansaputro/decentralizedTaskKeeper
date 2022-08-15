import React from "react";

function Notee(props){

    function handleClick() {
        console.log(props);
        props.toDelete(props.id);
    }

    return(
        <div className="note">
        <h1> {props.title} </h1>
        <p> {props.content} </p>
        <button onClick={handleClick}>DELETE</button>
    </div>
    );
};

export default Notee;