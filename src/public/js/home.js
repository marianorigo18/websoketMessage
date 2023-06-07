const socket = io();

const input = document.getElementById("textbox");
const text = document.getElementById("text");

input.addEventListener("keyup", e => {
    if(e.key === "Enter"){
        socket.emit("message", input.value)
        input.value = ""
    }
})

socket.on("imprimir", (data)=>{
    let textMess = "";
    data.forEach(element => {
        textMess += `${element.socketId} escribio: ${element.message}<br>` 
    });     
    text.innerHTML = textMess
})
