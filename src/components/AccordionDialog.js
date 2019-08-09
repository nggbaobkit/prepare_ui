import React, { Component } from 'react';
import { Card, Button } from 'react-mdl';
import '../styles/AccordionDialog.css';

export default class AccordionExampleStandard extends Component {
  state = {
    active: true
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const {
      pickUpAddress,
      dropOffAddress,
      pickUpDateTime,
      numPax,
      price
    } = this.props;

    return (
      <Card className='container' shadow={3}>
        <div className='icon-holder'>
          <div className='sav-icon'>{this.renderHeader(pickUpDateTime)}</div>
          <div className='count-down-text'>{this.renderIcon()}</div>
        </div>
        {this.renderContent(
          pickUpAddress,
          dropOffAddress,
          pickUpDateTime,
          numPax,
          price
        )}
      </Card>
    );
  }

  renderHeader = pickUpDateTime => {
    if (this.state.active) {
      return (
        <img alt={'SAV'} src={'images/baseline-directions_car-24px.svg'} />
      );
    } else {
      return (
        <span className='estimate-pickup-time'>
          Estimate pick up at {pickUpDateTime}
        </span>
      );
    }
  };

  renderIcon = () => {
    if (this.state.active) {
      return (
        <img src={'images/down.svg'} alt='down' onClick={this.handleClick} />
      );
    } else {
      return <img src={'images/up.svg'} alt='up' onClick={this.handleClick} />;
    }
  };

  renderContent = (
    pickUpAddress,
    dropOffAddress,
    pickUpDateTime,
    numPax,
    price
  ) => {
    if (this.state.active) {
      return (
        <div className='text-container'>
          <span className='fixed-text'>FROM</span>
          <br />
          <span className='important-text'>{pickUpAddress}</span>
          <br />
          <div className='some-space' />
          <span className='fixed-text'>TO</span>
          <br />
          <span className='important-text'>{dropOffAddress}</span>
          <br />
          <div className='some-space' />
          <div className='action'>
            <div className='extra-info'>
              <span className='estimate-pickup-time'>
                Estimate pick up at {pickUpDateTime}
              </span>
              <br />
              <span className='fixed-text'>
                {numPax} Passenger(s) - ¥{price}
              </span>
            </div>
            <div className='cancel-btn-holder'>
              <Button className='cancel-btn'>CANCEL</Button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
}
