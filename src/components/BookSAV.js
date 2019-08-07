import React, { Component } from 'react';
import { Button, Dialog } from 'react-mdl';
import '../styles/BookSAV.css';
import CountDown from './CountDown';

export default class BookSAV extends Component {
  handleConfirmBtnClicked = () => {
    console.log('Confirm clicked!');
  };

  handleDeclineBtnClicked = () => {
    console.log('Decline clicked!');
  };

  render() {
    return (
      <div>
        <Dialog open={true} className='book-sav-dialog'>
          <div className='icon-holder'>
            <div className='sav-icon'>Sav icon</div>
            <div className='count-down-text'>Auto cancel in</div>
            <div className='count-down-cirlce'>
              <CountDown />
            </div>
          </div>
          {this.renderText(
            'Shizuoka Station',
            'Chibi Maruko Chan Land',
            '16:19',
            '16:46'
          )}
          <div className='horizontal-line' />
          <div className='carry-info'>
            <div className='num-of-pax important-text'>1 Passenger</div>
            <div className='price important-text'>¥1500</div>
          </div>
          <div className='btn-holder'>
            <Button
              raised
              colored
              className='confirm-btn'
              onClick={this.handleConfirmBtnClicked}
            >
              CONFIRM
            </Button>
            <Button
              className='decline-btn'
              onClick={this.handleDeclineBtnClicked}
            >
              DECLINE
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }

  renderText = (pu, dr, puT, doT) => {
    return (
      <div>
        <span className='fixed-text'>FROM</span>
        <br />
        <span className='important-text'>{pu}</span>
        <br />
        <span className='fixed-text time-info'>Pick up at </span>
        <span className='important-text'>{puT}</span>
        <br />
        <span className='fixed-text'>TO</span>
        <br />
        <span className='important-text'>{dr}</span>
        <br />
        <span className='fixed-text time-info'>Drop off at </span>
        <span className='important-text'>{doT}</span>
      </div>
    );
  };
}
