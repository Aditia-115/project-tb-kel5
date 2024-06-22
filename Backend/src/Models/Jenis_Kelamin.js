const sql = require("./Database");

const getAllDataJenisKelamin = () => {
    const SQLQuery = 'SELECT * FROM jenis_kelamin';

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllDataJenisKelamin,
};
