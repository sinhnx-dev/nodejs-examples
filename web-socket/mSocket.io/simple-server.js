import { Server } from "socket.io"

const io = new Server(1411);
io.on("connection", (socket)=>{
    //send message to client
    socket.emit("hello", "World socket.io")
    //receive a message from client
    socket.on("howdy", (args)=>{
        console.log(args)
    })
})