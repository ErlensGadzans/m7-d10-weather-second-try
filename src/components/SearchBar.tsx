import React, { Component } from 'react'
import { idText } from 'typescript';
import InputForm from "../components/InputForm"


interface FetchinStates { 
    city: string | undefined,
}

export default class SearchBar extends Component<{}, FetchinStates> {

state={
    city: "",
}



async getWeather(e: any) {
e.preventDefault();
const city= e.target.elements.city.value
const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7455b647c283cf033bf6c77821d011ee`)
const data = await fetchWeather.json()
console.log(data)

}

    render() {
        return (
            <div>
                <InputForm getWeather={this.getWeather}/>
                
            </div>
        )
    }
}
