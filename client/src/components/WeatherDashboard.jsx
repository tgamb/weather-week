import React, { Component } from 'react'
import axios from 'axios'
import TodaysWeather from './TodaysWeather'

export default class WeatherDashboard extends Component {
    state = {
        weather: {}
    }

    componentDidMount() {
        this.getWeather()
    }

    getWeather = () => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?zip=30327,us&units=imperial&APPID=1aa2fe15d0a2c23dca1307993fb1d38c')
            .then((res) => {
                console.log(res.data)
                this.setState({weather: res.data})
            })
    }

    render() {
        return (
            <div>
                <TodaysWeather/> 
            </div>
        )
    }
}

