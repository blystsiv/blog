const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const postsRouter = require('./routes/posts');
const connectDB = require('./db');
const config = require('./config');
dotenv.config();

const app = express();

connectDB(config.MONGO_URI)

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/v1/posts', postsRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
