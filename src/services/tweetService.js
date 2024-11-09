import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

const createTweetService = async ({ body }) => {
    // try to find if there is a bad word in the tweet.
    // If there is such a word, we would not create the tweet

    const filter = new Filter();

    if (filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw new Error({
            message: 'tweet contains vulgar words',
            success: false
        })
    }

    const tweet = await createTweetRepository({ body });

    return tweet;
};


export { createTweetService };

