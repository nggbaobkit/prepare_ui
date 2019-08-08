import React, { Component } from 'react';
import Picker from 'react-mobile-picker-scroll';
import { Dialog, Button } from 'react-mdl';
import '../styles/NumPaxPicker.css';

export default class NumPaxPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        numPax: 2
      },
      optionGroups: {
        numPax: [1, 2, 3, 4]
      }
    };
  }

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
            <h4 className='header'>Number of Passengers</h4>
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
