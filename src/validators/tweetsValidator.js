export const validateTweet = (req, res, next) => {

    const isEmpty = (obj) => JSON.stringify(obj) === '{}';

    if (isEmpty(req.body)) {
        console.log(req.body);
        return res.json({
            message: 'request body cannot be empty'
        });
    }

    next();
}