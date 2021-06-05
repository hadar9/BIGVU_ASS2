const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const data = await axios.get(
      `https://bigvu-interviews-assets.s3.amazonaws.com/presenters.json`
    );
    res.status(200).json(data.data);
  } catch (e) {
    res.status(500).send('server error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}...`));
