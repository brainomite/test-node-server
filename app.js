const http = require("http");

const hostname = "localhost";
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    "Hello World!\nWe are running in " +
      process.env.NODE_ENV +
      " mode on port: " +
      port
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
