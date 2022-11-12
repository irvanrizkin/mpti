require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const transactionRoutes = require('./src/routes/transaction.route');

app.use(express.json());

app.get('/', (_, res) => {
  res.json(
    {
      success: true,
      message: 'Welcome to the main endpoint of TIPay'
    }
  );
});

app.use('/transaction', transactionRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
})
