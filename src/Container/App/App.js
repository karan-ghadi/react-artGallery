import React, { Component } from 'react';
import '././App.css';
import { Route, Switch } from "react-router-dom";
import Layout from '../../Components/Layout/Layout';
import Dashboard from '../Dashboard/Dashboard';
import NetworkDesign from '../Network-design/Network-Design';
import ServerOnboarding from '../Server-onboarding/Server-Onboarding';
import BlockchainOperations from '../Blockchain-operations/create/Blockchain-operations-create';
import Organisations from '../Blockchain-operations/Organisations/Organisations';
import Channels from '../Blockchain-operations/Channels/Channels';
import Terminal from '../Terminal/Terminal';


class App extends Component {
  state = {

  }
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/server-onboarding" component={ServerOnboarding} />
          <Route path="/network-design" component={NetworkDesign} />
          <Route path="/blockchain-operation/create" component={BlockchainOperations} />
          <Route path="/blockchain-operation/organisations" component={Organisations} />
          <Route path="/blockchain-operation/channels" component={Channels} />
          <Route path="/terminal" component={Terminal} />
          <Route component={Dashboard} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
