import Country from './Country.jsx'

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
                <li key={country.name.common}>{country.name.common}</li>
            ))}
        </ul>
    )
}
export default Countries
