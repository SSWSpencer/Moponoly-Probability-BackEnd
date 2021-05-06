const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const tileRouter = require("../tiles/tileRouter.js")

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/tiles", tileRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
