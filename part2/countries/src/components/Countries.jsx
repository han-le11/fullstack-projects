import { useState } from 'react'
import Country from './Country.jsx'

// Render a country with the Show button which shows the country details when clicked
const CountryListItem    = ({ country }) => {
    // setShow is used to toggle the visibility of the country details
    const [show, setShow] = useState(false)

    return (
        <div>
            {country.name.common}
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button>
            {show && <Country country={country} />}
        </div>
    )
}

// A list of countries to show based on the search
const Countries = ({ countries }) => {

    // If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific
    if (countries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }

    // When there is only one country matching the query, then the basic data of the country
    if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        )
    }

    return (
        <ul>
            {countries.map(country => (
                <li>
                    <CountryListItem key={country.name.common} country={country} />
                </li>
            ))}
        </ul>
    )
}
export default Countries
