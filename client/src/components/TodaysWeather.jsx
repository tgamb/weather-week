import React, { Component } from 'react'

export default class TodaysWeather extends Component {

    wiIcons = {
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

    render() {

        return (
            <div>
                <div className="currentWeather">
                    <div className="currentForecast">
                        <img className="todaysImage" src="https://firebasestorage.googleapis.com/v0/b/weather-week.appspot.com/o/sunBehindClouds.svg?alt=media&token=b38867dd-49b2-48b0-b719-29c5ee08a454" />
                        {this.props.forecast}
                    </div>
                    <div className="separator"></div>
                    <div className="tempLocationContainer">
                        <p className="currentTemp">
                            {this.props.temp}
                        </p>
                        <div className="currentLocation">
                            <p>
                                {this.props.city}, {this.props.country}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
