const express=require('express')
const mongoose=require("mongoose");
const app=express();
const port=3000;
const authRoutes=require("./routes/auth")
const todoRoutes=require("./routes/todo")
const cors=require("cors")

app.use(cors());
app.use(express.json());
app.use("/auth",authRoutes);
app.use("/todo",todoRoutes);

app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)

})
mongoose.connect("mongodb+srv://gudithirupathi02:thiru@database01.qe0b4xx.mongodb.net/?retryWrites=true&w=majority&appName=database01");