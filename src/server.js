const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (_, res) => res.json({
  status: 'Ok',
}));

app.use((_, res) => {
  res.status(404).send("Sorry can't find that!");
});

module.exports = app;
