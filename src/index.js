import express from "express";
import { PORT } from './config/port.js';
import { apiRoutes } from './routes/apiRoutes.js';

const app = express();

app.use('/api', apiRoutes)


app.listen(PORT, () => {
    console.log(`The server is listening @ ${PORT}`);
});