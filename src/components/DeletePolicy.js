import React from 'react';
import { Field, reduxForm } from 'redux-form';
import store from '../store';
var key = '';

function makeIndex(len) {
    let s = '';
    while (s.length < len)
        s += Math.random()
            .toString(36)
            .substr(2, len - s.length);
    //console.log(s);
    key = s;
    return s;
}

const ClientForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (

        <form onSubmit={handleSubmit}>

            <div><h2>Bag of Money = {store.getState().ACReducer.accounting}</h2></div>


            <div>
                <label>Name</label>
                <div>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="just client name"
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                >
                    Clear Values
                </button>
            </div>
            <div>
                <ul>
                    {store.getState().ACReducer.policies.map((client) => (
                        <li key={makeIndex(10)}>
                            {key} {client}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'clientform', // a unique identifier for this form
})(ClientForm);
