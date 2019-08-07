import React, { Component } from 'react';
import Picker from 'react-mobile-picker-scroll';
import { Dialog, Button } from 'react-mdl';
import '../styles/TimePicker.css';

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        hour: '16',
        min: '05'
      },
      optionGroups: {
        hour: this.generateArray(24),
        min: this.generateArray(60)
      }
    };
  }

  generateArray = numb => {
    var res = [];
    for (var i = 0; i < numb; i++) {
      res.push(i > 9 ? '' + i : '0' + i);
    }
    console.log(res);
    return res;
  };

  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };

  render() {
    const { optionGroups, valueGroups } = this.state;

    return (
      <React.Fragment className='departure-time-picker'>
        <div id='page-mask' />
        <div>
          <Dialog open={true} className='time-picker-dialog'>
            <h4 className='header'>Departure Time</h4>
            <Picker
              optionGroups={optionGroups}
              valueGroups={valueGroups}
              onChange={this.handleChange}
            />
            <div className='btn-holder'>
              <Button
                className='confirm-btn'
                onClick={this.handleConfirmBtnClicked}
              >
                CANCEL
              </Button>
              <Button
                className='decline-btn'
                onClick={this.handleDeclineBtnClicked}
              >
                SET
              </Button>
            </div>
          </Dialog>
        </div>
      </React.Fragment>
    );
  }
}
