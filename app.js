const http = require("http")

const server = http.createServer((req, res)=>{
    console.log(req)
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head>This is header</head>")
    res.write("<body>This is body</body>")
    res.write("</html>")
    res.end();
});
http.createServer()
server.listen(3000);