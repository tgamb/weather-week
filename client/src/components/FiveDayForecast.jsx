import React, { Component } from 'react'
import axios from 'axios'

export default class FiveDayForecast extends Component {

    render() {
        if(this.props.forecast.length < 1) {
            return null
        }
        return (
            <div className="fiveDayColumn">
                
                {this.props.forecast.map((day) => {
                    return (
                        <div className="fiveDay">
                            <div className="futureForecast">
                                <img className="futureImage" src="https://firebasestorage.googleapis.com/v0/b/weather-week.appspot.com/o/sunBehindClouds.svg?alt=media&token=b38867dd-49b2-48b0-b719-29c5ee08a454" />
                                {day.weather[0].main}
                            </div>
                            <div className="futureSeparator"></div>
                            <div className="futureTempContainer">
                                <p className="futureTemp">
                                    {day.main.temp}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
