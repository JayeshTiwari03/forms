import React, { useRef } from "react";

const UnForm = () => {

  const input = useRef(null)

  const submitHandler = (e) => {
      e.preventDefault()

      console.log(input.current.value)
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
      <input 
        type="text" 
        ref={input} 
        placeholder='Enter your First Name'
      />
      <button>Submit</button>
    </form>
    </div>
  );
};
export default UnForm;
