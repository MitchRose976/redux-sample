import * as actions from "./actionTypes";
import { produce } from "immer";

const bugAdded = (desc) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: desc,
    },
  };
};

const bugRemoved = (id) => {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      // property and arg are same
      // use shorthand syntax
      id,
    },
  };
};

const bugResolved = (id) => {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      // property and arg are same
      // use shorthand syntax
      id,
    },
  };
};

export { bugAdded, bugRemoved, bugResolved };
