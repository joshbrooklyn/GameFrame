import React from "react";

const initialFields = {
  viewableScreenshots: 1,
  activeImage: 0,
  selectedGame: {}, 
  guesses: []
};

function reducer(state, action) {
  switch (action.type) {
    case "change": {
      const { key, value } = action.payload;

      // Don't update state if value hasn't changed.
      if (value === state[key]) {
        return state;
      } else {
        // Otherwise, copy the state and update the field that changed.
        return { ...state, [key]: value };
      }
    }
    case "reset":
      return { ...initialFields };
    default:
      throw new Error();
  }
}

export default function useFieldState() {
  // https://reactjs.org/docs/hooks-reference.html#usereducer
  const [fields, dispatch] = React.useReducer(reducer, initialFields);

  const changeField = React.useCallback((key, value) => {
    dispatch({ type: "change", payload: { key, value } });
  }, []);

  const resetFields = React.useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  return {
    changeField,
    fields,
    // This function isn't used. I just added it here as an example of how you can add additional actions.
    resetFields,
  };
}