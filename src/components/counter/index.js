import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import "./index.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-wrpr">
      <h1>Counter: {counter}</h1>
      <div className="button-wrpr">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
