import { io } from "socket.io-client"
const socket = io ("ws://localhost:1411")

//receive message from server
socket.on("hello", (arg)=>{
    console.log(`message from server: "${arg}"`)
})

//send message to server
socket.emit("howdy", "stranger")