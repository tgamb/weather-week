import React, { Component } from 'react'
import axios from 'axios'
import TodaysWeather from './TodaysWeather'
import LocationImage from './LocationImage'
import SearchBar from './SearchBar'
import FiveDayForeCast from './FiveDayForecast'

export default class WeatherDashboard extends Component {
    state = {
        temp:'',
        city:'',
        country:'',
        forecast: '',
        icon:'', 
        zipCode: ''
    }

    componentDidMount() {
        this.getWeather()
    }

    getWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&units=imperial&APPID=1aa2fe15d0a2c23dca1307993fb1d38c`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    temp: res.data.main.temp, 
                    city: res.data.name, 
                    country: res.data.sys.country, 
                    forecast: res.data.weather[0].description, 
                    icon: res.data.weather[0].icon, 
                })
            })
    }
    
    handleChange = (event) => {
        this.setState({zipCode: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
            this.getWeather()
    }

    render() {
        return (
            <div>
                <div>
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
                    <LocationImage/> 
                </div>
                {/* <div>
                    <SearchBar
                    getWeather={this.getWeather}/>
                </div> */}
                <div>
                    <FiveDayForeCast/>
                </div>
            </div>
        )
    }
}

