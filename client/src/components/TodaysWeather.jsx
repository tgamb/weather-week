import React, { Component } from 'react'

export default class TodaysWeather extends Component {

    render() {

        return (
            <div>
                <div className="currentWeather">
                    <div className="currentForecast">
                        <i className={`wi ${this.props.icon} weatherIcon`}></i>
                        {/* <img className="todaysImage" src="https://firebasestorage.googleapis.com/v0/b/weather-week.appspot.com/o/sunBehindClouds.svg?alt=media&token=b38867dd-49b2-48b0-b719-29c5ee08a454" /> */}
                        {this.props.forecast}
                    </div>
                    <div className="separator"></div>
                    <div className="tempLocationContainer">
                        <p className="currentTemp">
                            {this.props.temp}
                        </p>
                        <div className="currentLocation">
                            <p>
                                {this.props.city}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
