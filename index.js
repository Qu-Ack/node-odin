const https = require('http');
const fs = require('fs');
const path = require('path');


const server = https.createServer((req, res) => {
    if (req.url === '/')
    {
        fs.readFile(path.join(__dirname , 'index.html') , (err, data) => {
            if (err)
            {
                return err
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data, 'utf8');
        })
    } else if (req.url == '/about')
    {
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err)
            {
                return err
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data, 'utf-8')
        })
    }
    else {
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            if (err)
            {
                return err
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data, 'utf-8');
        })
    }
})


const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server Running on ${PORT} ...`))