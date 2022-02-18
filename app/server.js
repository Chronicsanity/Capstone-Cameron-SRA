const { exec } = require ('child_process');
const http = require('http');
const express = require('express');
const app = express();
 

const server = http.createServer((req, res) =>
{
  if (req.url === '/run') {
    exec('main.py', () => {

      res.writeHead (200, {'Content-Type':'text/plain'});
      res.write('Server is working!');
      res.end();
    })
  

}
  server.listen(8080)
});

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});