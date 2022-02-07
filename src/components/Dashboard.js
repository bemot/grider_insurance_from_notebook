import React, { Component } from 'react';
import AddClient from './AddClient.js';
import showPolicies from './showPolicies.js';
import { Grid, Image } from 'semantic-ui-react';

class Dashboard extends Component {
    render() {
        return (
            <div className="six wide columns">
                <div
                    className="ui container"
                    style={{ padding: 0, margin: '0', maxWidth: 600 }}
                >
                    <h2 style={{ marginTop: '0.2rem' }}>Policies</h2>
                    <h2>Add policy</h2>
                    <AddClient onSubmit={showPolicies} />
                </div>

                <div
                    className="ui container"
                    style={{ padding: 0, margin: '0', maxWidth: 600 }}
                >
                    <h2 style={{ marginTop: '0.2rem' }}>Policies</h2>
                    <h2>Add policy</h2>
                    <AddClient onSubmit={showPolicies} />
                </div>
            </div>
        );
    }
}
export default Dashboard;
