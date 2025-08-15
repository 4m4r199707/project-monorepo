
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
});

app.post('/echo', (req, res) => {
  const { message } = req.body;
  res.send({ received: message });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
