import { exec } from'child_process';
import http from 'http';
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(); 

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

app.use(express.static(__dirname + '/website'));
app.listen(process.env.PORT || 8080);
 
// Start the server
