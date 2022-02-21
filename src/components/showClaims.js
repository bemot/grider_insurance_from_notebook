import { createClaim } from "../actions/index";
import store from "../store";

const policyExists = (name) => {
  if (store.getState().ACReducer.policies.includes(name)) return true;
  else {
    alert("Client does not exist!!!");
    return false;
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default (async function showReisults(values) {
  await sleep(500); // simulate server latency
  //window.alert(`You submitted:\n\n${JSON.stringify(values.name, null, 2)}`);
  var clientname = JSON.stringify(values.name, null, 2).replaceAll('"', "");
  //console.log(clientname);

  if (policyExists(clientname)) store.dispatch(createClaim(clientname, 100));

  console.log(store.getState().ACReducer.accounting);
});
