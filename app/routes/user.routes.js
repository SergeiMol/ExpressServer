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
        "https://modest-neumann-88d173.netlify.app/api/test/all",
        controller.allAccess
    );

    app.get(
        'https://modest-neumann-88d173.netlify.app/api/test/users',
        [authJwt.verifyToken],
        controller.getAllUsers
    );

    app.get(
        "https://modest-neumann-88d173.netlify.app/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "https://modest-neumann-88d173.netlify.app/api/test/user/validate",
        [authJwt.verifyToken],
        controller.verifyAccess
    )

    app.get(
        "https://modest-neumann-88d173.netlify.app/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

    app.get(
        "https://modest-neumann-88d173.netlify.app/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

    app.post(
        "https://modest-neumann-88d173.netlify.app/api/test/delete",
        controller.deleteCheckedUsers
    );

    app.post(
        "https://modest-neumann-88d173.netlify.app/api/test/block",
        controller.blockCheckedUsers
    );

    app.post(
        "https://modest-neumann-88d173.netlify.app/api/test/unblock",
        controller.unblockCheckedUsers
    );
};