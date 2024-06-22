//dependencies dot env untuk `.env`
require('dotenv').config()

const cors = require('cors');

//Port yang diambil dari file .env atau bisa juga di set secara default
const PORT = process.env.PORT; // || 5000;

//dependencies express
const express = require('express');

//Declare express ke variabel app
const app = express();

const PendidikanRoutes = require('./Routes/Pendidikan')
const KeterampilanRoutes = require('./Routes/Keterampilan')
const JenisKelaminRoutes = require('./Routes/Jenis_Kelamin')
const PelamarRoutes = require('./Routes/Pelamar')
const DetailKeterampilanRoutes = require('./Routes/Detail_Keterampilan')

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

app.use(cors()); 

app.use(express.json());

app.use('/Pendidikan', PendidikanRoutes);
app.use('/Keterampilan', KeterampilanRoutes);
app.use('/Jenis_Kelamin', JenisKelaminRoutes);
app.use('/Pelamar', PelamarRoutes);
app.use('/Detail_Keterampilan', DetailKeterampilanRoutes);


app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})