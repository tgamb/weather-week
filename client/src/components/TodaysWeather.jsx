import React, { Component } from 'react'

export default class TodaysWeather extends Component {
    render() {
        return (
            <div>
                {/* <div className="todaysWeather"> */}
                <div className="currentWeather">
                    <p className="currentTemp">
                        {this.props.forecast} | {this.props.temp} 
                    </p>
                <div className="currentLocation">
                    <p>
                        {this.props.city}, {this.props.country}
                    </p>
                </div>
                </div>
                {/* </div> */}
            </div>
        )
    }
}
