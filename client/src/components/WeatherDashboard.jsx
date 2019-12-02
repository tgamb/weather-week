import React, { Component } from 'react'
import axios from 'axios'
import TodaysWeather from './TodaysWeather'
import LocationImage from './LocationImage'
import FiveDayForeCast from './FiveDayForecast'

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

export default class WeatherDashboard extends Component {
    state = {
        temp:'', 
        city:'', 
        country:'', 
        forecast: '', 
        icon:'', 
        zipCode: '30327', 
        date: '', 
        fiveDay: []
    }
    
    componentDidMount() {
        this.getWeather() 
        this.getFiveDay()
    }

    getWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&units=imperial&APPID=1aa2fe15d0a2c23dca1307993fb1d38c`)
            .then((res) => {
                console.log(res.data)

                const weatherIcon = res.data.weather[0].icon

                this.setState({
                    temp: res.data.main.temp, 
                    city: res.data.name, 
                    country: res.data.sys.country, 
                    forecast: res.data.weather[0].main, 
                    icon: wiIcons[weatherIcon], 
                })
            })
    }
    
    // newZipCode = this.state.zipCode

    postZipCode = () => {
        axios.post('/api/locations', {
            zipCode: this.state.zipCode
        })
    }

    handleChange = (event) => {
        this.setState({zipCode: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
            this.getWeather()
            this.getFiveDay()
            this.postZipCode()
    }

    filterFiveDay = (forecastList) => {
        const filteredForecast = forecastList.filter((i) => {
            if (i.dt_txt.includes('15:00:00')) {
                return true;
            }
            return false
        })
        return filteredForecast;
    }

    getFiveDay = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},us&units=imperial&APPID=1aa2fe15d0a2c23dca1307993fb1d38c`)
            .then((res) => {
                console.log(res.data)
                // this.setState(res.data)
                const filteredForecast = this.filterFiveDay(res.data.list)
                const newState = {...this.state}
                newState.fiveDay = filteredForecast
                this.setState(newState)
                console.log('newState', newState)
                console.log('filteredForecast', filteredForecast)
            })
            .catch((error) => {
                console.log('Error getting five day forecast')
                console.log(error)
            })
    }

    // roundTemperature = () => {
    //     Math.round(this.state.temp)
        
    // }

    render() {
        return (
            <div className="background">
                <div className="formField">
                    <div className="appHeader">
                        <h2>Weather Week</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        value={this.state.zipCode}
                        onChange={this.handleChange}
                        />
                    </form>
                </div>
                <div>
                    <TodaysWeather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    forecast={this.state.forecast}
                    icon={this.state.icon}
                    /> 
                </div>
                <div>
                    {/* <LocationImage/>  */}
                </div>
                <div>
                    <FiveDayForeCast
                    forecast={this.state.fiveDay}/>
                </div>
            </div>
        )
    }
}

