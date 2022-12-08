require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/models');

const app = express();

app.use(cors());

const transactionRoutes = require('./src/routes/transaction.route');

const errorHandler = require('./src/utils/errorHandler');

app.use(express.json());

db.sequelize.sync();

app.get('/', (_, res) => {
  res.json(
    {
      success: true,
      message: 'Welcome to the main endpoint of TIPay'
    }
  );
});

app.use('/transaction', transactionRoutes);

app.use(errorHandler)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
})
