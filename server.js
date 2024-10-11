const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Define the storage location with original file extension
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save in the 'uploads' directory
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const extension = path.extname(file.originalname); // Get the original file extension
        const newFilename = `${timestamp}-${file.originalname}${extension}`; // Preserve extension
        cb(null, newFilename);

        // Log the original file name and timestamped file name
        console.log(`Uploaded File: Original Name: ${file.originalname}, Timestamped Name: ${newFilename}`);
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
