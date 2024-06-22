const sql = require("./Database");

const getAllDataDetailKeterampilan = () => {
    const SQLQuery = 'SELECT * FROM detail_keterampilan';

    return sql.execute(SQLQuery);
}

const createNewDetailKeterampilan = (body) => {
    const SQLQuery = `  INSERT INTO detail_keterampilan 
                        (kd_keterampilan, id_pelamar)
                        VALUES 
                        ('${body.kd_keterampilan}', '${body.id_pelamar}')`;

    return sql.execute(SQLQuery);
}

const deleteDetailKeterampilan = (id_detail_keterampilan) => {
    const SQLQuery = `DELETE FROM detail_keterampilan WHERE id_detail_keterampilan=${id_detail_keterampilan}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllDataDetailKeterampilan,
    createNewDetailKeterampilan,
    deleteDetailKeterampilan
};