import { tweetSchema } from "./tweetsZodSchema.js";

export function validateTweetUsingZod(req, res, next) {
    const body = req.body;

    try {
        tweetSchema.parse(body);
        next();
    } catch (e) {
        console.error(e.errors);
        res.status(400).json({
            error: e.errors
        })
    }

}