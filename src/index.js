const http = require("http");
const url = require("url");
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wendsday",
  "thurday",
  "friday",
  "saturday"
];

const server = http.createServer((req, res) => {
  const date = new Date().getDay();
  const day = days.find((item, index, array) => index === date);
  const queryObject = url.parse(req.url, true).query;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello ${queryObject.name}, today is ${day}.`);
});

server.listen(() => {
  console.log("Server running");
});
