import React, { Component } from 'react';
import '../style/App.css';
import {Tabs, Tab} from 'react-bootstrap'
import Order from './Order'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the ticket order web page</h1>
        </header>
          <div>
              <Tabs defaultActiveKey={1}>
                  <Tab eventKey={1} title="Order Tickets">
                      <Order/>
                  </Tab>
                  <Tab eventKey={2} title="Cancel Tickets"></Tab>
                  <Tab eventKey={3} title="Help Center"></Tab>
              </Tabs>
          </div>
      </div>
    );
  }
}

export default App;
