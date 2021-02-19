module.exports = {
    HOST: "eu-cdbr-west-03.cleardb.net",
    USER: "bb19f79100d571",
    PASSWORD: "4211c6ae",
    DB: "heroku_3db933e55be70e3",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
