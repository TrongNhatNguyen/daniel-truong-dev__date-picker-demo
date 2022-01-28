import React from 'react';
import './DateStyles.scss';
import DateDisplay from './DateDisplay';

class DateContainer extends React.Component {
    state = {
        date: new Date(),
    };

    handleChangeDay = (event) => {
        this.setState({
            date: event.target.value,
        });
    };

    // chạy 1 hành động nếu có sự thay đổi nào đó
    componentDidUpdate(PrevProps, prevState) {
        if (this.state !== prevState) {
            alert('đã thay đổi ngày');
        }
    }

    render() {
        let currentDay = new Date();
        var currentDateInput = currentDay.toISOString().substr(0, 10);

        return (
            <div className="date-container">
                <input
                    type="date"
                    className="date-input"
                    defaultValue={currentDateInput}
                    onChange={(event) => this.handleChangeDay(event)}
                />

                <DateDisplay date={this.state.date} />
            </div>
        );
    }
}

export default DateContainer;
