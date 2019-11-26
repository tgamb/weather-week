import React, { Component } from 'react'
import axios from 'axios'

export default class FiveDayForecast extends Component {

    // filterFiveDay = (forecastList) => {
    //     const filteredForecast = forecastList.filter((i) => {
    //         if (i.dt_txt.includes('15:00:00')) {
    //             return true;
    //         }
    //         return false
    //     })
    //     return filteredForecast;
    // }

    // getFiveDay = () => {
    //     axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.props.zipCode},us&units=imperial&APPID=1aa2fe15d0a2c23dca1307993fb1d38c`)
    //         .then((res) => {
    //             console.log(res.data)
    //             this.setState(res.data)
    //             const filteredForecast = this.filterFiveDay(res.data.list)
    //             this.setState({forecast: filteredForecast})
    //             console.log('filteredForecast', filteredForecast)
    //         })
    // }

    render() {
        return (
            <div>
                {this.props.forecast.map((day) => {
                    return(
                        <div>
                            {day.main.temp}
                        </div>
                    )
                })}
            </div>
        )
    }
}
