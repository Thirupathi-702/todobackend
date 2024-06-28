require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

mongoose.connect(process.env.MONGO_URI//, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));
