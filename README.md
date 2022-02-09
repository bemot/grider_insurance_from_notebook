Simple inteface to the famous Stephen Grider Udeme example of insurance company.
https://www.youtube.com/watch?v=3sjMRS1gJys&ab_channel=StephenGrider

console.clear();
console.error()
console.warn()
//keep two functions createStore and cobineReducers in Redux
const { createStore, combineReducers } = Redux;

// people dropping of forms (Action Creators)
const createClaim = (name, amountOfMoneyToCollect) => {
return { //returns object
//this is the form of a claim
type: 'CREATE_CLAIM',
payload: {
name: name,
amountOfMoneyToCollect: amountOfMoneyToCollect
}
};
};

const createPolicy = (name, amount) => {
return { //returns object
type: 'CREATE_POLICY',
payload:{
name:name,
amount: amount
}
};
};

const deletePolicy = (name) => {
return { //retursn object
type: 'DELETE_POLICY',
payload: {
name: name
}
};
};

//Departments (reducers) - functions, actions are the forms coming for departmen reaction is reaction is appropriate
//attention!! we newer change in this case oldListOfClaims, we are creating a new oldListOfClaims
const claimsHistory = (oldListOfClaims = [], action) => {
if (action.type === 'CREATE_CLAIM') {
return [...oldListOfClaims, action.payload.name];
}

return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
if (action.type === 'CREATE_CLAIM') {
return bagOfMoney - action.payload.amountOfMoneyToCollect;
} else if (action.type === 'CREATE_POLICY') {
return bagOfMoney + action.payload.amount;
}
return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
if (action.type === 'CREATE_POLICY') {
return [...listOfPolicies, action.payload.name];
}else if (action.type === 'DELETE_POLICY') {
return listOfPolicies.filter(policy => policy !== action.payload.name);
}
return listOfPolicies;
};

// Company setup
const ourDepartments = combineReducers({
accounting: accounting,
claimsHistory: claimsHistory,
policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 40))
store.dispatch(createPolicy('Sasha', 40));
store.dispatch(createPolicy('Vera', 10));
store.dispatch(createPolicy('Grisha', 10));
store.dispatch(deletePolicy('Alex'));
store.dispatch(createClaim('Vera',20));

console.log(store.getState());
