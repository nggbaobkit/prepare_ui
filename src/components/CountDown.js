import React, { Component } from 'react';
import '../styles/CountDown.css';

export default class CoundDown extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }

  intervalCountDown = setInterval(() => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      clearInterval(null);
    }
  }, 1000);

  //   if() {
  //     clearInterval(this.intervalCountDown);
  //   }

  render() {
    return (
      <div id='countdown'>
        <div id='countdown-number' />
        <svg>
          <circle className='book-sav-cirlce' r='18' cx='20' cy='20' />
        </svg>
      </div>
    );
  }

  componentDidMount = () => {
    this.countdownNumberEl = document.getElementById('countdown-number');
  };

  componentDidUpdate = () => {
    this.countdownNumberEl.textContent = this.state.count;
  };
}
