import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

// the key is read from the environment, never hardcoded
const apiKey = import.meta.env.VITE_SOME_KEY

// Current weather at the country's capital, with temperature in Celsius and wind in m/s.
const getForCountry = (country) => {

    // Uses the capital's coordinates from the API when the data has them
    const [lat, lon] = country.capitalInfo?.latlng ?? []

    // Otherwise, search for the first capital of the country's name
    const location = lat !== undefined ? { lat, lon } : { q: country.capital[0] }

    const request = axios.get(baseUrl, {
        params: { ...location, appid: apiKey, units: 'metric' }
    })
    return request.then(response => response.data)
}

const hasApiKey = Boolean(apiKey)

export default { getForCountry, hasApiKey }