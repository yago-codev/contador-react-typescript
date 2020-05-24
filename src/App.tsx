import React, { Component } from 'react';

import CountDisplay from './CountDisplay';

interface State {
  count: number;
}

type Props = {};

class App extends Component<Props, State> {
  state: State = {
    count: 0,
  }

  increment: any = () => {
    return this.setState({ count: this.state.count + 1 });
  }

  decrement: any = () => {
    return this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="App">
        <CountDisplay count={this.state.count} />
        <button type="button" onClick={() => this.increment()}>+</button>
        <button type="button" onClick={() => this.decrement()}>-</button>
      </div>
    )
  }
}

export default App;
