const sql = require("./Database");

const getAllDataPelamar = () => {
    const SQLQuery = 'SELECT * FROM pelamar';

    return sql.execute(SQLQuery);
}

const createNewPelamar = (body) => {
    const SQLQuery = `  INSERT INTO pelamar 
                        (nama_pelamar, jenis_kelamin_pelamar, alamat_pelamar, email_pelamar, no_telpon_pelamar, kd_pendidikan, pengalaman_pelamar, tanggal_lamar)
                        VALUES 
                        ('${body.nama_pelamar}', '${body.jenis_kelamin_pelamar}', '${body.alamat_pelamar}', '${body.email_pelamar}', '${body.no_telpon_pelamar}', '${body.kd_pendidikan}', '${body.pengalaman_pelamar}', '${body.tanggal_lamar}')`;

    return sql.execute(SQLQuery);
}

const editDataPelamar = (body, id_pelamar) => {
    const SQLQuery = `  UPDATE pelamar 
                        SET 
                        nama_pelamar=  '${body.nama_pelamar}', jenis_kelamin_pelamar='${body.jenis_kelamin_pelamar}', 
                        alamat_pelamar= '${body.alamat_pelamar}', email_pelamar= '${body.email_pelamar}', 
                        no_telpon_pelamar= '${body.no_telpon_pelamar}', kd_pendidikan= '${body.kd_pendidikan}',
                        pengalaman_pelamar= '${body.pengalaman_pelamar}', tanggal_lamar= '${body.tanggal_lamar}'
                        WHERE id_pelamar= ${id_pelamar}`;

    return sql.execute(SQLQuery);
}

const deletePelamar = (id_pelamar) => {
    const SQLQuery = `DELETE FROM pelamar WHERE id_pelamar=${id_pelamar}`;

    return sql.execute(SQLQuery);
}

module.exports = {
    getAllDataPelamar,
    createNewPelamar,
    editDataPelamar,
    deletePelamar
};