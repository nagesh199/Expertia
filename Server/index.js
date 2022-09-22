const express = require("express");
const app = express();
const { connection } = require("./configs/db")
const jobsRouter = require("./route/job");
const cors = require("cors")

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.use("/jobs",jobsRouter)
app.get("/",(req,res)=>{
    console.log(req.session)
    return res.send("hello world")
})
app.listen(8080,async()=>{
    try {
        await connection
        console.log("connection success")
    }
    catch{
        console.log("feild connection")
    }
    console.log("Server strated on http://localhost:8080")
})