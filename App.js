import React, { useState, Component } from "react";
import "./styles.css";

export default App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export class LegacyApp extends Component {
  state = {
    item: 0,
  };

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };

  render() {
    const { item } = this.state;
    // const incrementItem = () => this.setState({ item: item + 1 });
    // const decrementItem = () => this.setState({ item: item - 1 });

    return (
      <>
        <div className="App">
          <h1>Hello {item}</h1>
          <button onClick={this.incrementItem}>Increment</button>
          <button onClick={this.decrementItem}>Decrement</button>
        </div>
      </>
    );
  }
}
