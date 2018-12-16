import React from 'react';

const char = (props) => {
  const style = {
    display:'inline-block',
    padding: '16px',
    textAlign:'center',
    margin:'16px',
    border: '1px solid black'
};
  return(
    <div style = {style} onClick={props.changed} >
      <p > {props.lt} </p>
    </div>
  );
};

export default char;
