const http = require("http");
const path = require("path");
const { readPublicFile } = require("./fileService");

const PORT = 3000;

const routes = {
  "/": "home.html",
  "/home": "home.html",
  "/about": "about.html",
  "/contact": "contact.html",
};

const server = http.createServer(async (req, res) => {
  let filePath = "";
  let contentType = "text/html";

  if (routes[req.url]) {
    filePath = routes[req.url];
  } else if (req.url.endsWith(".css")) {
    filePath = req.url.substring(1);
    contentType = "text/css";
  } else if (req.url.endsWith(".js")) {
    filePath = req.url.substring(1);
    contentType = "application/javascript";
  } else if (req.url.endsWith(".jpg") || req.url.endsWith(".png")) {
    filePath = req.url.substring(1);
    contentType = "image/jpeg";
  } else {
    filePath = "404.html";
  }

  try {
    const data = await readPublicFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (err) {
    const data = await readPublicFile("404.html");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(data);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
