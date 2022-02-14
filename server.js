const express = require('express');
const app = express();
const favicon = require('express-favicon');
const parser= require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const FbModel = require('./FbModel');
const url = "mongodb+srv://feedbacks:royam1234@feedbacks.7ugfh.mongodb.net/feedbacksDB?retryWrites=true&w=majority";

mongoose.connect(url, ()=>{console.log("connected")}, (e)=> {
    console.log(e)
});

const port = 5000;


app.use(express.static(path.join(__dirname, '/client/build/')));
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(favicon(__dirname + '/client/public/favicon.ico'));

async function run(){
    try{
        return FbModel.find().sort({"_id":-1}).then(data => {return data});

    }catch(e){
        console.log(e);
    }
}


app.listen(process.env.PORT || port, ()=>{
    console.log("HTHT");
})


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
})

app.get('/feedback',async (req,res)=>{
    const fbs = await run();    //await inportant!!!
    res.send(JSON.stringify(fbs));
})

app.post("/feedback", async function(req,res){
    const newFb = {
        review:req.body.review,
        rating:req.body.rating
    };

    FbModel.create(newFb).then(data => {res.send(JSON.stringify(data))});
    
})

app.put("/feedback/:ID", async function(req,res){
    var ID = req.params.ID
    const filter = {
        _id:mongoose.Types.ObjectId(ID),
    }
    const updateTo = {
        review: req.body.review,
        rating: req.body.rating,
    }
    FbModel.findOneAndUpdate(filter, updateTo).then();
    const fbs = await run();
    res.send(JSON.stringify(fbs));

})

app.delete("/feedback/:ID", async function(req,res){
    var ID = req.params.ID
    const filter = {
        _id:mongoose.Types.ObjectId(ID),
    }
    FbModel.deleteOne(filter).then()
    const fbs = await run();
    res.send(JSON.stringify(fbs));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});