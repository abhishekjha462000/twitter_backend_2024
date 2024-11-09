import express, { json } from "express";
import { PORT, MONGO_URL } from './config/port.js';
import { apiRoutes } from './routes/apiRoutes.js';
import { tweetsRouter } from "./routes/tweets.js";
import { connectDb } from "./config/dbConfig.js";

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/tweets', tweetsRouter);


app.listen(PORT, () => {
    console.log(`The server is listening @ ${PORT}`);
    connectDb(MONGO_URL);
});