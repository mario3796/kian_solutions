const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const employeeRoutes = require('./routes/employee.routes');

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/employees', employeeRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.oouf2.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(port, () => console.log(`connected to localhost:${port}`))
  );
