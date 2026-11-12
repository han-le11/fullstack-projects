import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')  // for search filter bar

  // Fetch all countries once when the app starts
  useEffect(() => {
    countryService
        .getAll()
        .then(countries => {
          setCountries(countries)
        })
        .catch(error => {
          console.log('could not load countries', error)
        })

  }, [])

  // event handler for country search box
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  // only show matches when the user has entered something in the search box
  const matches = search ? countries.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
  ) : []

  return (
      <div className="App">
        <h1>Country Search</h1>

        <div>
            Find countries <input value={search} onChange={handleSearch}/>
        </div>
            {matches && <Countries countries={matches} />}
      </div>
  )
}
export default App
