const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  const endpoint = '/api/todo';

  server.get(endpoint, async (res) => {
    res.json(await todoService.getTodos());
  });

  server.post(endpoint, async (req, res) => {
    const todo = req.body;
    res.json(await todoService.postTodo(todo));
  });

  return server;
};
module.exports = server;
