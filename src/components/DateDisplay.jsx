import React from 'react';
import './DateStyles.scss';
import moment from 'moment';

class DateDisplay extends React.Component {
    render() {
        let { date } = this.props;

        return <div className="date-display">Your selected day: {moment(date).format('LL')}</div>;
    }
}

export default DateDisplay;
