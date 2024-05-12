const express = require('express');
const app = express();

app.get('/', function(req, res) {
 res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
 console.log(`Server running on http://localhost:${port}`);
});