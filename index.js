import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import productRoute from './routes/ProductRoute.js';

const app = express();

app.use(cors()) // Agar kita bisa mengakses dari luar domain
app.use(express.json()); // Agar kita bisa mengambil data dari body berupa json
app.use(fileUpload()); // Agar kita bisa mengupload file
app.use(express.static("public")) // untuk membuat statick file agar bisa di akses
app.use(productRoute);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});