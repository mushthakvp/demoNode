var http = require("http")
var fs = require("fs")
var url = require("url")

http.createServer(function (req, res) {

    var urlPath = url.parse(req.url, true)


    if (urlPath.pathname === "/") {
        fs.readFile("sample.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data)
            res.end()
        })
    } else if (urlPath.pathname === "/login") {
        fs.readFile("signup.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data)
            res.end()
        })

    } else if (urlPath.pathname === "/success") {
        fs.readFile("success.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write("<h1>" + urlPath.query.number + "</h1>")
            res.end()
        })
    } else {
        res.write("page not found")
        res.end()
    }

}).listen(7000, () => console.log("server starting Musthak"))

