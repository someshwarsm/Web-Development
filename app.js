const http = require("http")
const fs = require("fs")
const queryString = require("querystring")

const server = http.createServer((req, res)=>{
    const url = req.url
    if(url === "/"){
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head>Enter A Text:</head>")
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Enter</button></form></body>')
        res.write("</html>")
        return res.end();
    }
    if(url ==="/message"){
        let rawData = ""
        
        req.on("data", (chunk) => {
            rawData+=chunk;
        });
        req.on("end", () => {
            const parsedBody = queryString.decode(rawData);
            const message = parsedBody["message"]
            fs.writeFile("data.txt", message, 'utf8', (err)=>{
                if(err) throw err;
                console.log("Data written to file successfully.")
            });
        });
        res.statusCode = 302
        res.setHeader("Location", "/")
        return res.end();
    }
    
});
http.createServer()
server.listen(3000);