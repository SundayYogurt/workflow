const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000; // fallback default port

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
    "Hello from Docker! this is develop branch and add feature branch.\n"
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
