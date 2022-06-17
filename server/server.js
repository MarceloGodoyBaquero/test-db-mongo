const express = require('express');
const app = express();
const cors = require("cors");

require('dotenv').config();
const connectDB = require('./config/db')

const todo = require("./routes/todo");

connectDB();

app.use(cors({ origin: true, credentials: true }))

//middleware
app.use(express.json());
app.get('/', (req, res) => res.send('server up and running'));

app.use("/api/todo", todo);

//configuración del port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
});

