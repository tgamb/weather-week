import React, { Component } from 'react'
import axios from 'axios'

export default class FiveDayForecast extends Component {

    render() {
        return (
            <div className="fiveDayColumn">
                    {this.props.forecast.map((day) => {
                        return (
                            <div className="fiveDay">
                            <div className="futureForecast">
                                <img className="futureImage" src="https://firebasestorage.googleapis.com/v0/b/weather-week.appspot.com/o/sunBehindClouds.svg?alt=media&token=b38867dd-49b2-48b0-b719-29c5ee08a454" />
                                Clouds
                            {/* {this.props.forecast} */}
                            </div>
                            <div className="futureSeparator"></div>
                            <div className="futureTempContainer">
                                <p className="futureTemp">
                                    {/* {this.props.temp}  */}
                                    20
                            </p>
                            </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}
