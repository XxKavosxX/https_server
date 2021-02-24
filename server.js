const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./ca_key.pem'),
  cert: fs.readFileSync('./ca_cert.pem')
};

https.createServer(options, (req, res) => {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8070);
