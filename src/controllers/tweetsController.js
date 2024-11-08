
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


export { getAllTweets, getTweetById };