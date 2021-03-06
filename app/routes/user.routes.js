const {authJwt} = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/all",
        controller.allAccess
    );

    app.get(
        '/api/test/users',
        [authJwt.verifyToken],
        controller.getAllUsers
    );

    app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "/api/test/user/validate",
        [authJwt.verifyToken],
        controller.verifyAccess
    )

    app.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

    app.post(
        "/api/test/delete",
        controller.deleteCheckedUsers
    );

    app.post(
        "/api/test/block",
        controller.blockCheckedUsers
    );

    app.post(
        "/api/test/unblock",
        controller.unblockCheckedUsers
    );
};