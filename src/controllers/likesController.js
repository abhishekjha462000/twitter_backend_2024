const getLikesv2 = (req, res) => {
    res.json({
        message: 'Welcome to the likes page of the api v2',
    })
};

const getLikesByIdv2 = (req, res) => {
    res.json({
        message: `Welcome to the like v2 with id ${req.params.id}`,
        id: req.params.id
    });
};

const getLikesv1 = (req, res) => {
    res.json({
        message: 'Welcome to the likes page of the api v1',
    })
};

const getLikesByIdv1 = (req, res) => {
    res.json({
        message: `Welcome to the like v1 with id ${req.params.id}`,
        id: req.params.id
    });
};


export { getLikesByIdv1, getLikesByIdv2, getLikesv1, getLikesv2 };