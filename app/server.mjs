import { exec } from'child_process';
import http from 'http';
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(); 

const server = http.createServer((req, res) =>
{
  if (req.url === '/') {
    exec('main.py', () => {

      res.writeHead (200, {'Content-Type':'text/plain'});
      res.write('Server is working!');
      res.end();
    })
  

}
  server.listen(8080)
  response.end();
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}
app.use(express.static(__dirname + '/website'));
app.listen(process.env.PORT || 8080);
 
// Start the server
