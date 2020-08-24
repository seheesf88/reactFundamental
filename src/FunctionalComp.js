import React from 'react';

const FunctionalComp = (props) => {
  console.log(props.greet.morning);
  return(
    <div>
      what is props.greet? {props.greet.morning}
    </div>
  )
}

export default FunctionalComp
