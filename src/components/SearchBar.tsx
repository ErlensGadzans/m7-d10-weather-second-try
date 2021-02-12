import React, { Component } from 'react'

import InputForm from "../components/InputForm"




interface FetchinStates { 
    city: string ,
    data: number|undefined
    temperature: number | undefined,
    humidity: number | undefined,
}

export default class SearchBar extends Component<{}, FetchinStates> {

state={
    city: "",
    data: undefined,
    temperature: undefined,
    humidity: undefined,
   
}

async getWeather(e: any) {
e.preventDefault();
const city= e.target.elements.city.value
const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7455b647c283cf033bf6c77821d011ee&units=metric`)
const data = await fetchWeather.json()
console.log(data)
this.setState({temperature: data.main.temp, humidity: data.main.humidity})

}

    render() {
        return (
            <div>
                <InputForm getWeather={this.getWeather}/>

                {<p>Temperature: {this.state.temperature}</p>}
                {<p>Humidity: {this.state.humidity}</p>}
               
                
            </div>
        )
    }
}
