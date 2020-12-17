import React, { useReducer } from "react";

const Reduce = () => {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  return (
    <div>
      {sum}
      <button onClick={() => dispatch(1)}>Add 1</button>
    </div>
  );
};

export default Reduce;
