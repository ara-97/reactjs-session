import React, { Component } from 'react';

import Child from './components/Child';

import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      count: 2,
      show: false
    };
  }

  doIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate = () => {
    console.log('update...');
  };

  componentDidMount = () => {
    console.log('mounted');
  };

  toggleComp = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    console.log('render');

    return (
      <div className="App">
        {this.state.show ? <Child1 /> : null}
        <button onClick={this.toggleComp}>Toggle</button>
      </div>
    );
  }
}

class Child1 extends Component {
  constructor(props) {
    super();
  }

  componentWillUnmount = () => {
    console.log('unmounting..');
  };

  render() {
    return <div>Child</div>;
  }
}

export default App;
