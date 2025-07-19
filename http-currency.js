
const http = require("http");
const {data} = require("./currencies.json");
// const data = require("./currencies.json").data;
const port = 8081;

const server = http.createServer((req, res)=>{

    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type":"text/html"});
            res.write("<h1>Currency Datebase</h1>");
            res.end();
            break;
    
        case "/currencies":
            res.writeHead(200, { "Content-Type":"application/json"});
            res.write(JSON.stringify(data));
            res.end();
            break;

        
        default:
            res.writeHead(404).end("404 Not Found");
            break;
    }

});




server.listen(port,()=>{
    console.log(`Listening on port no ${port}`)
})