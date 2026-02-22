const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 10000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend')));
app.post('/api/register', (req, res) => { /* registration logic */ });
app.post('/api/login', (req, res) => { /* login logic */ });
app.post('/api/tasks', (req, res) => { /* create task logic */ });
app.get('/api/tasks', (req, res) => { /* get tasks logic */ });
app.patch('/api/tasks/:task_id', (req, res) => { /* update task logic */ });
app.delete('/api/tasks/:task_id', (req, res) => { /* delete task logic */ });
app.post('/api/notifications/settings', (req, res) => { /* notification settings logic */ });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "cors": "^2.8.5",
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0"
  }
}
*/