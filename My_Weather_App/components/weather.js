import React from 'react'
import moment from 'moment';

import { Card } from 'semantic-ui-react'

const weather = ({ weatherData }) => {
    return (
        <div>
            <Card>
                <Card.Content>
                    <Card.Header className="header">{weatherData.name}</Card.Header>
                    <p>Temprature: {weatherData.main.temp}  &deg;F</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Description: {weatherData.weather[0].main}</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p>Day: {moment().format('dddd')}</p>
                    <p>Date: {moment().format('LL')}</p>
                </Card.Content>
            </Card>
        </div>
    )
}

export default weather