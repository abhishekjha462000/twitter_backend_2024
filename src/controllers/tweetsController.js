import { createTweetService } from "../services/tweetService.js";

const getAllTweets = (req, res) => {
    res.json({
        message: 'This is the page for all the tweets',
        body: req.body
    });
};


const getTweetById = (req, res) => {
    res.json({
        message: `This is the page for the tweet with id = ${req.params.id}`,
        id: req.params.id,
        body: req.body
    });
};

const createTweet = async (req, res) => {
    // this is the controller layer.
    // use the service layer here
    // const { body } = req.body;
    console.log(req.body);
    try {
        const tweet = await createTweetService(req.body)
        return res.json({
            message: 'tweet created successfully',
            success: true,
            data: tweet
        });
    } catch (e) {
        return res.status(500).json({
            error: e,
            success: false
        });
    }
}


export { createTweet, getAllTweets, getTweetById };