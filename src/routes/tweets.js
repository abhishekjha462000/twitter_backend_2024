import express from 'express';
import { getAllTweets, createTweet } from '../controllers/tweetsController.js'
// import { validateTweet } from '../validators/tweetsValidator.js';
import { validateTweetUsingZod } from '../validators/tweetsValidatorZod.js';

const tweetsRouter = express.Router();


tweetsRouter.get('/', getAllTweets);
tweetsRouter.get('/:id', validateTweetUsingZod, createTweet);

export { tweetsRouter };