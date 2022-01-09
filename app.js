require('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(require('./routers/authRouter'));

//AutoDeployTest2
app.get('/',(req,res) =>{
    res.json("Auth Example Project");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

