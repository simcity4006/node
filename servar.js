let http=require("http")
let port=4500;
let hostname='127.0.0.1'

let Myserver= http.createServer((req, res)=>{
    res.writeHead(202, {'Content-Type': 'text/html'})
    res.write("</h1>This heading new</h1>")
    res.end();
});

Myserver.listen(port,hostname, ()=>{
    console.log(`server is running successful at http://${hostname}:${port}`)
})