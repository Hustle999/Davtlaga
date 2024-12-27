import express from "express";
import cors from "cors";
import { MockData } from "./mockdata.js";

const PORT = 8000;
const server = express();
server.use(cors());

server.get("/", (request, response) => {
  response.json(MockData);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
