
const http = require("http");

const port = 8081;
const server = http.createServer((req, res)=>{

    const serverinfo = {
        serverName: "Crio Server",
        version: "1.0.0",
        currentDate: new Date().toLocaleDateString(),
        currentTime: new Date().toLocaleTimeString(),
    }

    if(req.url=="/status"){
        res.writeHead(200, { "Content-Type": "application/json"});
        res.write(JSON.stringify(serverinfo));
        res.end();
    }else{
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<h1>Hello from the Server</h1>");
        res.end(); 
    }

});

server.listen(port,()=>{
    console.log("listening...")
});