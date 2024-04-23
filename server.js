const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Serve static files
app.use(express.static('public'));

// Handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Serve uploaded images
app.get('/uploads/:filename', (req, res) => {
  const fileName = req.params.filename;
  res.sendFile(path.join(__dirname, 'public/uploads', fileName));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
