const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

exports.verifyAccess = (req, res) => {
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
            if (!user) {
                return res.status(404).send({message: "User Not found."});
            }
            if (user.status === "Blocked") {
                return res.status(402).send({
                    accessToken: null,
                    message: "User is blocked"
                })
            }
            return res.status(200).send(user)

        }
    ).catch(err => res.status(500).send({message: err.message}))
}

const findAllUsers = (req, res) => {
    User.findAll()
        .then(users => {
            if (!users) {
                return res.status(404).send({message: "Users not found"});
            }
            return res.status(200).send(users);
        })
        .catch(err => res.status(500).send({message: err.message}));
}

exports.getAllUsers = (req, res) => {
    findAllUsers(req, res);
}

exports.deleteCheckedUsers = (req, res) => {
    User.destroy({
        where: {
            id: req.body.arr
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({message: "SEREJA LOH"});
        }
        findAllUsers(req, res);
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}

exports.blockCheckedUsers = (req, res) => {
    User.update({
            status: 'Blocked'
        },
        {
            where: {
                id: req.body.arr
            }
        }
    ).then(user => {
        if (!user) {
            return res.status(404).send({message: "SEREJA LOH"});
        }
        findAllUsers(req, res);
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}

exports.unblockCheckedUsers = (req, res) => {
    User.update({
            status: 'Active'
        },
        {
            where: {
                id: req.body.arr
            }
        }
    ).then(user => {
        if (!user) {
            return res.status(404).send({message: "SEREJA LOH"});
        }
        findAllUsers(req, res);
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}
//при успешном удалении приходит назад массив тех id, которые удалил
