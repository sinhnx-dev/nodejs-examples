// client.js

const WebSocket = require('ws')
const url = 'ws://localhost:2010'
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('Message 1 From Client')
  connection.send('Message 2 From Client')
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}