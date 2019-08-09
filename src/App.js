import React, { Component } from 'react';
import './App.css';
import AccordionDialog from './components/AccordionDialog';

class App extends Component {
  render() {
    return (
      <div>
        <AccordionDialog
          pickUpAddress={'Shizuoka Station'}
          dropOffAddress={'Chibi Maruko Chan Land'}
          numPax={1}
          price={1500}
          pickUpDateTime={'16:19'}
        />
      </div>
    );
  }
}

export default App;
