//keep two functions createStore and cobineReducers in Redux
//const { createStore, combineReducers } = Redux;
import { CREATE_CLAIM, CREATE_POLICY, DELETE_POLICY } from "./types";
// people dropping of forms (Action Creators)
// new request - new claim from client with name

export const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    //returns object
    //this is the form of a claim
    type: CREATE_CLAIM,
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

//new request -please create policy
export const createPolicy = (name, amount) => {
  return {
    //returns object
    type: CREATE_POLICY,
    payload: {
      name: name,
      amount: amount,
    },
  };
};

//new request - please delete policy
export const deletePolicy = (name) => {
  return {
    //retursn object
    type: DELETE_POLICY,
    payload: {
      name: name,
    },
  };
};
