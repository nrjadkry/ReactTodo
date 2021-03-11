import React from 'react';

const Plan = (props) => {
  return (
    <>
    	<li className="shadow p-2 my-2 col-sm-9">{props.task}</li>
    	<button onClick={() => {props.sendData(props.id)}} className="btn btn-danger my-2 col-sm-2 offset-1">X</button>
    </>
  )
}

export default Plan;