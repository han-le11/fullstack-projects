// Shows the basic data of a single country: capital, area, languages and flag
const Country = ({ country }) => {
    const capital = country.capital ? country.capital.join(', '): 'No capital'

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {capital}</p>
            <p>Area {country.area}</p>

            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />

        </div>
    )
}

export default Country