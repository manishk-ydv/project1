import dotenv from "dotenv";
import connectdb from "./db/index.js";

dotenv.config({
    path: './env'
})
connectdb;

then (() => {
    app.listen(process.env.PORT ||  8000 ,() =>{
        console.log(`server is running in at port: ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("Error not connected on db",err);
});