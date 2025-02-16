import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState: CounterState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        count: state.count - action.payload,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button
        className="px-4 py-2 bg-green-300 rounded-md mx-1"
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >
        Increment 10
      </button>
      <button
        className="px-4 py-2 bg-red-300 rounded-md mx-1"
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >
        Decrement 10
      </button>
      <button
        className="px-4 py-2 bg-gray-300 rounded-md mx-1"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}
