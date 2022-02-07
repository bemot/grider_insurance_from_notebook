import React, { Component } from 'react';
import AddClient from './AddClient.js';
import DeletePolicy from './DeletePolicy'
import AddClaim from './AddClaim'
import showPolicies from './showPolicies';
import showAfterDeletePolicy from './showAfterDeletePolicy'
import showClaims from './showClaims'
import store from '../store'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div><h2>Bag of Money  </h2></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                    <div>

                        <h2>Add client</h2>
                        <AddClient onSubmit={showPolicies} />
                    </div>
                    <div> <h2>Add claim</h2>
                        <AddClaim onSubmit={showClaims} />
                    </div>
                    <div> <h2>Delete client</h2>
                        <DeletePolicy onSubmit={showAfterDeletePolicy} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;
