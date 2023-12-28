

export function sayHello () {
    console.log("Logged in Successfully - Hello Andy")
}

export function connectToHost() {
    var ws = new WebSocket('ws://66.229.200.121/');
    
}

export function sendMessageToHost() {
    ws.send("Hello Server")
}