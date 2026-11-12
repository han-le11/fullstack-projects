import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

// Fetch every country once; the search is done in the browser
const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}

export default { getAll }