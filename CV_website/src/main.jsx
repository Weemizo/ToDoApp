import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint, {
      method: "get", // ikr its a default
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())

  }
}