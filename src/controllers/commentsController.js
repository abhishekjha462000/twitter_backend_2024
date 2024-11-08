const getCommentsv1 = (req, res) => {
    res.json({
        message: 'Welcome to the comments page of the v1 api'
    });
}

const getCommentByIdv1 = (req, res) => {
    res.json({
        message: `Welcome to the comment page of the v1 api with id = ${req.params.id}`,
        id: req.params.id
    });
}

const getCommentsv2 = (req, res) => {
    res.json({
        message: 'Welcome to the comments page of the v2 api'
    });
}

const getCommentByIdv2 = (req, res) => {
    res.json({
        message: `Welcome to the comment page of the v2 api with id = ${req.params.id}`,
        id: req.params.id
    });
}


export { getCommentByIdv1, getCommentByIdv2, getCommentsv1, getCommentsv2 };