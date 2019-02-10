import React, { PropTypes, Component } from 'react';
import { Typography } from '@material-ui/core';
import Countdown from 'react-countdown-now';

class CCountdown extends Component {
  constructor(props) {
    super(props);
  }

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (<Typography variant="h2" gutterBottom>The WEDDING is ON</Typography>);
    } else {
      return (
        <div className="timer">
          <p><span>{days}</span> Days</p>
          <p><span>{hours}</span> Hours</p>
          <p><span>{minutes}</span> Minutes</p>
          <p><span>{seconds}</span> Seconds</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="Countdown">
          <Countdown date={new Date('2019-02-23T00:28:00')} renderer={this.renderer}/>
      </div>
    );
  }
}

export default CCountdown;