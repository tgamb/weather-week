import React, { Component } from 'react'
import axios from 'axios'

export default class FiveDayForecast extends Component {

    state = {

    }

    componentDidMount() {
        this.getFiveDay()
    }

    

    filterFiveDay = () => {
        this.state.list.map((i) => {
            console.log(i.dt_txt)
        })
    }

    getFiveDay = () => {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?zip=30327,us&units=imperial&APPID=1aa2fe15d0a2c23dca1307993fb1d38c')
            .then((res) => {
                console.log(res.data)
                this.setState(res.data)
                this.filterFiveDay()
            })
    }

    render() {
        return (
            <div>
                <p>Five Day Forecast Here</p>
            </div>
        )
    }
}
