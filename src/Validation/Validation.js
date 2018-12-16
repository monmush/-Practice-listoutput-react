import React from 'react'

const validation = (props) => {
  let validationMessage = 'This is too short';
  if (props.length > 5){
    validationMessage = 'This is long enough'
  };
  return(
    <div>
      {validationMessage}
    </div>
  );

}

export default validation;
