const sql = require("./Database");

const getAllDataKeterampilan = () => {
    const SQLQuery = 'SELECT * FROM keterampilan';

    return sql.execute(SQLQuery);
}

const createNewKeterampilan = (body) => {
    const SQLQuery = `  INSERT INTO keterampilan
                        (nama_keterampilan)
                        VALUES 
                        ('${body.nama_keterampilan}')`;

    return sql.execute(SQLQuery);
}

const editDataKeterampilan = (body, kd_keterampilan) => {
    const SQLQuery = `  UPDATE keterampilan 
                        SET 
                        nama_keterampilan=  '${body.nama_keterampilan}'
                        WHERE kd_keterampilan=${kd_keterampilan}`;

    return sql.execute(SQLQuery);
}

const deleteKeterampilan = (kd_keterampilan) => {
    const SQLQuery = `DELETE FROM keterampilan WHERE kd_keterampilan=${kd_keterampilan}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllDataKeterampilan,
    createNewKeterampilan,
    editDataKeterampilan,
    deleteKeterampilan
};