import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios'

const wiIcons = {
    '01d': 'wi-day-sunny',
    '01n': 'wi-night-clear',
    '02d': 'wi-day-sunny-overcast',
    '02n': 'wi-night-alt-partly-cloudy',
    '03d': 'wi-day-cloudy',
    '03n': 'wi-night-alt-cloudy',
    '04d': 'wi-day-cloudy-high',
    '04n': 'wi-night-alt-cloudy-high',
    '09d': 'wi-day-sprinkle',
    '09n': 'wi-night-alt-sprinkle',
    '10d': 'wi-day-rain',
    '10n': 'wi-night-alt-rain',
    '11d': 'wi-day-thunderstorm',
    '11n': 'wi-night-alt-thunderstorm',
    '13d': 'wi-day-snow',
    '13n': 'wi-night-alt-snow',
    '50d': 'wi-day-fog',
    '50n': 'wi-night-fog'
};

export default class FiveDayForecast extends Component {

    convertDate = (dateString) => {
        const momentDate = moment(dateString, 'YYYY-MM-DD HH:mm:ss')
        console.log('dateString', dateString)
        console.log('momentDate', momentDate)
        return momentDate.format('ddd')
    }

    render() {

        return (
            <div className="fiveDayColumn">

                {this.props.forecast.map((day) => {
                    const weatherIcon = day.weather[0].icon
                    const icon = wiIcons[weatherIcon]
                    const roundedTemp = Math.round(day.main.temp)
                    const weekdayNumber = this.convertDate(day.dt_txt)
                    

                    return (
                        <div className="fiveDay">
                            <div className="futureForecast">
                                <i className={`wi ${icon} fiveDayIcon`}></i>
                                {day.weather[0].main}
                            </div>
                            <div className="futureSeparator"></div>
                            <div className="futureTempContainer">
                                <p className="futureTemp">
                                    {roundedTemp}
                                </p>
                                <p className="weekday">
                                    {weekdayNumber}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
