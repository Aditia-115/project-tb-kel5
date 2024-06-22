const sql = require("./Database");

const getAllDataPendidikan = () => {
    const SQLQuery = 'SELECT * FROM pendidikan';

    return sql.execute(SQLQuery);
}

const createNewPendidikan = (body) => {
    const SQLQuery = `  INSERT INTO pendidikan 
                        (nama_pendidikan)
                        VALUES 
                        ('${body.nama_pendidikan}')`;

    return sql.execute(SQLQuery);
}

const editDataPendidikan = (body, kd_pendidikan) => {
    const SQLQuery = `  UPDATE pendidikan 
                        SET 
                        nama_pendidikan=  '${body.nama_pendidikan}'
                        WHERE kd_pendidikan=${kd_pendidikan}`;

    return sql.execute(SQLQuery);
}

const deletePendidikan = (kd_pendidikan) => {
    const SQLQuery = `DELETE FROM pendidikan WHERE kd_pendidikan=${kd_pendidikan}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllDataPendidikan,
    createNewPendidikan,
    editDataPendidikan,
    deletePendidikan
};
