import React, { Component } from "react";
import { store } from './store';
import HelloWorld from "./HelloWorld";
import ButtonGroup from './ButtonGroup';

class App extends Component {
  render() {
    return [
      <HelloWorld tech={store.getState().tech} key={1} />,
      <ButtonGroup props={[{tech: 'React'}, {tech: 'Elm'}, {tech: 'React-Redux'}]} key={2} />
    ]
  }
}

export default App;
