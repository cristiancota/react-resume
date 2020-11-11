import React from 'react';
import Moment from 'react-moment';

const DateRange = (props) => {
  return (
    <span>
      <Moment format={props.format}>{props.start}</Moment> -{' '}
      {props.end ? (
        <Moment format={props.format}>{props.end}</Moment>
      ) : (
        'Present'
      )}
    </span>
  );
};

export default DateRange;
