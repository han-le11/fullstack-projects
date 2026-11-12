import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

// Weather report for the capital of the given country
const Weather = ({ country }) => {
  const capital = country.capital[0]
  const [weather, setWeather] = useState(null) // weather data state
  const [failed, setFailed] = useState(false) // whether weather loading failed

  // fetch weather again whenever a different country is shown
  useEffect(() => {
    if (!weatherService.hasApiKey) {
      return
    }

    let ignore = false // skips the answer if the user has moved on to another country

    setWeather(null)
    setFailed(false)

    weatherService
      .getForCountry(country)
      .then(data => {
        if (!ignore) {
          setWeather(data)
        }
      })
      .catch(error => {
        console.log('could not load weather', error)
        if (!ignore) {
          setFailed(true)
        }
      })

    return () => {
      ignore = true
    }
  }, [country])

  if (!weatherService.hasApiKey) {
    return <p>Weather is unavailable: start the app with the VITE_SOME_KEY environment variable set.</p>
  }

  if (failed) {
    return <p>Could not load the weather for {capital}.</p>
  }

  if (weather === null) {
    return <p>Loading weather...</p>
  }

  const description = weather.weather[0].description
  const icon = weather.weather[0].icon

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>Temperature: {weather.main.temp} °C</div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div>Wind: {weather.wind.speed} m/s</div>
    </div>
  )
}

export default Weather