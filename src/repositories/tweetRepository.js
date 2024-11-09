import { Tweet } from "../schemas/tweetSchema.js";

const createTweet = async ({ body }) => {
    try {
        await Tweet.create({ body });
    } catch (e) {
        throw e;
    }
};


const getTweets = async () => {
    try {
        const tweets = await Tweet.find();
        return tweets;
    } catch (e) {
        throw e;
    }
};


const getTweetById = async (tweetId) => {
    try {
        const tweet = await Tweet.findById(tweetId);
        return tweet;
    } catch (e) {
        throw e;
    }
};

export { createTweet };