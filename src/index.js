require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require ('express');

const usersRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json()); //Mengizinkan user post body json
app.use('/assets',express.static('public/images'));//midleware tampilin gambar ke user

app.use('/users', usersRoutes);
app.post('/upload',upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Berhasil'
    })
})

app.use((err, req, res, next) =>{
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil dirunning diport ${PORT}`);
})