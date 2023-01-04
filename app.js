const express =require ("express");
const app=express();
const path=require("path");
const multer=require("multer")
const cors=require("cors");
//const mysql=require('mysql');
const bodyParser=require('body-parser');
const PORT=process.env.PORT|| 5150;
const morgan = require('morgan')
const mongoose = require('mongoose');
require("dotenv").config();
//const cors=require("cors");



const uri=process.env.MONGODB_CONNECTION_STRING;

 mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
}).then (()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("database doesnt connect")
})
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("it connected successfully");
})


app.use(morgan('dev'));
app.use(cors({
    origin:["http://localhost:5050/"],
    methods:["GET","POST"],
    credentials:true
}));
//app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
/*app.use(session({
    key:"portfoilo",
    secret:"besties",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    }
}))*/
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/Images',express.static('./Images'));


if (process.env.NODE_ENV ==="production"){
    app.use(express.static("my-portfolio/build"));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'my-portfolio','build','index.html'))})
}


app.get("/",(req,res)=>{
    console.log("here")
    console.log(app.use(express.static(path.join(__dirname,'./Images'))))
    res.send("helphhjg")
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  

  const upload=multer({
    storage:storage
}) 


const Service={
    productdescription:String,
    market:String,
    productimage:{data:Buffer,
    contentType:String},
    id:Number
}

const monmodel=mongoose.model("service",Service);

app.get('/file',(req,res)=>{
  //  const sqlSelect="SELECT * FROM service";
    //db.query(sqlSelect,(err,result)=>{
      //  console.log(result)
       // res.send(result)       })
       monmodel.find()
       .then(result=>{
           res.status(200).json({
               studentData:result
           });
       })
       .catch(err=>{
           console.log("err")
           res.status(500).json({
               error:err
           })
       })
})



app.post('/api/insert',upload.single('avatar'),async (req,res)=>{
   
   // const  productdescription=req.body.productdescription;
    //const market=req.body.market;
    //const productimage=req.file.path;
    const data=new monmodel({
 productdescription:req.body.productdescription,
  market:req.body.market,
 productimage:{
     data:req.file.path,
       contentType:"productimage/png"
},
 id:req.body.id
    });
    const val=await data .save();
    res.json(val);
 
 
//console.log(req.body)
//console.log(req.body.productdescription)
//console.log(req.body.data);
//const sqlInsert="INSERT INTO service (productimage,productdescription,market)VALUES(?,?,?)"
//db.query(sqlInsert,[productdescription,market,productimage],(err,result)=>{
//console.log(result)
//console.log(err)})
console.log(req.body.productdescription)
console.log(req.body.market)
console.log(req.files)
console.log(req.avatar)


})












//get from seller table111
app.get('/api/get',(req,res)=>{
    const sqlSelect="SELECT * FROM productsinfo";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
  })
})
///byId/


app.get('/api/get/:id',(req,res)=>{
    var id=req.params.id;
    const sqlSelect="SELECT * FROM productsinfo where id="+id+"";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
      

  })
    
})




//post to seller table
/*
app.post('/api/insert',upload.single('avatar'),async (req,res)=>{
    
 try{
      
    const price=req.body.price;
    const domesticshipping=req.body.domesticshipping;
    const internationalshipping=req.body.internationalshipping;
    const shipin=req.body.shipin;
    const  category=req.body.category;
    const  subcategory=req.body.subcategory;
    const  productname=req.body.productname;
    const  avaliability=req.body.avaliability;
    const  size=req.body.size;
    const  productdescription=req.body.productdescription;
    const market=req.body.market;
    const productimage=req.file.path;
  
   const sqlInsert="INSERT INTO productsinfo(productimage,price,domesticshipping,internationalshipping,shipin,category,subcategory,productname,avaliability,size,productdescription,market )VALUES(?,?,?,?,?,?,?,?,?,?,?,?)"
   db.query(sqlInsert,[productimage,price,domesticshipping,internationalshipping,shipin,category,subcategory,productname,avaliability,size,productdescription,market],(err,result)=>{
console.log(result)
console.log(err)

   })
}catch(err){
        console.log(err)
    }


})
*/






app.listen(5150)

app.listen( PORT,()=>{
    console.log("server running on port 5150")
})