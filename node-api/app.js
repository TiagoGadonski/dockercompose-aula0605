const express = require('express');
const axios = require('axios');
const app = express();
const host = '0.0.0.0'
const port = 3000;


app.get('/', (req, res) => {
    axios.get("flask_api").then(e =>send("From flask api" + e.data ))
});


app.listen(port, host, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
