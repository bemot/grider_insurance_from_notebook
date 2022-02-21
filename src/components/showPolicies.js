import { createPolicy } from "../actions/index";
import store from "../store";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const policyExists = (name) => {
  if (store.getState().ACReducer.policies.includes(name)) return true;
  else return false;
};

export default (async function showReisults(values) {
  await sleep(500); // simulate server latency
  //window.alert(`You submitted:\n\n${JSON.stringify(values.name, null, 2)}`);
  var clientname = JSON.stringify(values.name, null, 2).replaceAll('"', "");
  //console.log(clientname);

  // console.log(store.getState().ACReducer.policies);

  if (!policyExists(clientname)) store.dispatch(createPolicy(clientname, 100));
  else alert("Client already exists!");
  console.log(store.getState().ACReducer.accounting);
});
