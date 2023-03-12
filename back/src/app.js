const http = require('http');
const url = require('url');
const db = require('./data');

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

const PORT = 3001;

http.createServer((req, res) => {
   const parsedUrl = url.parse(req.url, true);
   console.log(parsedUrl);
});
