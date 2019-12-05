import React, { Component } from 'react'

export default class TodaysWeather extends Component {

    render() {

        return (
            <div>
                <div className="currentWeather">
                    <div className="currentForecast">
                        <i className={`wi ${this.props.icon} weatherIcon`}></i>
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
