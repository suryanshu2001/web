const express=require('express');
const {dbConn}=require('./config/db');
const Auth=require('./middlewares/Auth').default;
const useropp=require('./routes/useropp')
const cors =require ('cors');

const port=5001;

dbConn();
const app=express();
app.use(cors());
app.use(express.json());
app.use(useropp);





app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})
