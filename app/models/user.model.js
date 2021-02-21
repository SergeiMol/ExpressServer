module.exports = (sequelize, Sequelize) => {
    return sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        lastLogin: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.TINYINT
        }
    });
};