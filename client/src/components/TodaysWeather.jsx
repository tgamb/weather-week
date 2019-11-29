import React, { Component } from 'react'

export default class TodaysWeather extends Component {
    render() {

        return (
            <div>
                <div className="currentWeather">
                    <p className="currentForecast">
                        {this.props.forecast}
                    </p>
                    <div className="separator"></div>
                <div className="tempLocationContainer">
                    <p className="currentTemp">
                        {/* {this.props.temp}  */}
                        75
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
