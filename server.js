const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const pdfFolderPath = 'C:/util/centauro-docs'; // Ruta a la carpeta que contiene los PDFs
const corsOptions = {
    origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));
// Ruta para servir los archivos PDF
app.use('/pdfs', express.static(pdfFolderPath));

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
