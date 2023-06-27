const express = require('express');
const dotenv = require('dotenv').config();/*
const { errorHandler } = require('./invoice-app-api/middleware/errorMiddleware');
const connectDB = require('./invoice-app-api/config/db');
const UploadFile = require('./invoice-app-api/services/uploadFile');
const multer = require('multer');*/
const port = process.env.PORT || 5000;


//connectDB();
const app = express();
const router = express.Router()
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./invoice-app-api/routes/userRoutes'));
app.use('/api/organizations', require('./invoice-app-api/routes/organizationRoutes'));
app.use('/api/categories', require('./invoice-app-api/routes/categoryRoutes'))
app.use('/api/subcategories', require('./invoice-app-api/routes/subCategoryRoutes'))
app.use('/api/products', require('./invoice-app-api/routes/productRoutes'))
app.use('/api/files', require('./invoice-app-api/routes/file.routes'))
app.use('/api/images', express.static(path.join(__dirname, 'uploads')))
*/
router.get('/api', async (req, res) => {
    res.status(200).json({message: 'Georginot'})
})
/*
router.post('/fileupload', async (req, res) => {
  try {
    await UploadFile(req, res);
    res.status(200).send({"msf": "Dd"})
  } catch (error) {
    console.log(error)
  }
})
*/
app.use(router)
/*
// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);
*/
app.listen(port, () => console.log(`Server started on port ${port}`));
