require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");
const { HoldingModel } = require("./models/Holdingmodel");
const { PositionModel} = require("./models/PositionModel");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./server/Routes/AuthRoute");
const cors = require("cors");
const { OrderModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());




app.use("/", authRoute);

app.get("/allholding",async(req,res)=>{
let allholding = await HoldingModel.find({});
res.json(allholding);
});

app.get("/allposition",async(req,res)=>{
let allposition = await PositionModel.find({});
res.json(allposition);
});


app.post("/neworder",async (req,res)=>{
  let newOrder = new OrderModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });
    newOrder.save();
res.send("Oreder saved!")
 
});

app.listen(PORT,()=>{
    console.log("app started!");
    mongoose.connect(uri);
    console.log("DB connected!");
});