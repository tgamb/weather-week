import React, { Component } from 'react'

export default class TodaysWeather extends Component {
    render() {
        return (
            <div>
                <p>{this.props.temp}
                    {this.props.city}
                    {this.props.country}
                    {this.props.forecast}
                </p>
            </div>
        )
    }
}
