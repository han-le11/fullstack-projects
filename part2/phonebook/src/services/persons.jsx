import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

// Get all contacts/persons
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// Add a new person
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

// Remove a person
const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    remove: remove
}