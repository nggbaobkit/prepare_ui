import React, { Component } from 'react';
import './App.css';
import NumPaxPicker from './components/NumPaxPicker';
import TimePicker from './components/TimePicker';

class App extends Component {
  render() {
    return (
      <div>
        <NumPaxPicker />
        {/* <TimePicker /> */}
      </div>
    );
  }
}

export default App;
