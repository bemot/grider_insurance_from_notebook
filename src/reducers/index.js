import { combineReducers } from 'redux';
import { CREATE_CLAIM, CREATE_POLICY, DELETE_POLICY } from '../actions/types';
//Departments (reducers) - functions, actions are the forms coming for departmen reaction is reaction is appropriate
//attention!! we newer change in this case oldListOfClaims, we are creating a new oldListOfClaims

// answer to requse CREATE_CLAIM - create new claim from client with name put it in claimsHistory
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === CREATE_CLAIM) {
        return [...oldListOfClaims, action.payload.name];
    }

    return oldListOfClaims;
};

// accounting also reacts to the CREATE_CLAIM - giving money to the client from bagOfMoney
// on CREATE_POLICY accounting is receiving money in the bagOfMoney
const accounting = (bagOfMoney = 100, action) => {
    if (action.type === CREATE_CLAIM) {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === CREATE_POLICY) {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
};

//department of policies reacts on both CREATE_POLICY and DELETE_POLICY
const policies = (listOfPolicies = [], action) => {
    if (action.type === CREATE_POLICY) {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === DELETE_POLICY) {
        return listOfPolicies.filter(
            (policy) => policy !== action.payload.name
        );
    }
    return listOfPolicies;
};

// Company setup
const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies,
});

export default ourDepartments;
