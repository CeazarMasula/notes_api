import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './router';

const app = express();

app.use(cors());

app.use(bodyParser.json());

const server = http.createServer(app)

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running: http://localhost:3000')
})

app.use('/', router())