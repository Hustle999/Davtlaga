import express from "express";

const PORT = 8000;
const server = express();

server.get("/", (request, response) => {
  response.json("hello");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
