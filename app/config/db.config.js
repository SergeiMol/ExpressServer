module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "SergeiKlass2001",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};