# Phonebook
Stack
Vite + React 18 for the frontend (npm run dev).
axios for HTTP calls.
json-server serves db.json as a REST API on port 3001 (npm run server).
ESLint with the React plugins.
The README says you later wrote a real Node backend in a separate repo, han-le11/phonebook-backend.
## Description 
A simple phonebook app where we can add name and phone numbers.

## File layout
```aiignore
phonebook/
├── db.json              # mock database of persons and their phone numbers
├── index.html           # has <div id="root">, loads src/main.jsx
├── vite.config.js       # React plugin
├── package.json         # scripts: dev, build, lint, preview, server
└── src/
    ├── main.jsx         # entry point, renders <App />
    ├── App.jsx          # all state and logic
    ├── index.css        # global styles (Vite template defaults + body margins)
    ├── App.css          # leftover Vite template styles, not imported anywhere
    └── components/
        ├── Filter.jsx       # search bar
        ├── PersonForm.jsx   # name and number inputs, add button
        ├── Persons.jsx      # maps over the list of persons
        └── Person.jsx       # displays a single person and their number
```

## Backend 
For the backend with Node.js of the phonebook, here is the repository [link](https://github.com/han-le11/phonebook-backend).