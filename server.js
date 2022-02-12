const express = require('express');
const app = express();
const port = 5000;
const parser= require('body-parser');
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

var _id=6;

var fb = [
    {
        id:1,
        rating:6,
        review:"Lorem ipsum dolor sit amet"
    },
    {
        id:2,
        rating:4,
        review:"Consectetur adipisicing elit."
    },
    {
        id:3,
        rating:8,
        review:"Atque, alias veritatis."
    },
    {
        id:4,
        rating:10,
        review:"Veritatis nemo, sit consequuntur quidem enim pariatur illo"
    },
    {
        id:5,
        rating:1,
        review:"Fuga, sapiente minima."
    }
];

app.get('/feedback',(req,res)=>{
    res.send(fb);
})

app.listen(process.env.PORT ||   port, ()=>{
    console.log("HTHT");
})

app.post("/feedback", function(req,res){
    const newFb = {
        id: _id,
        review:req.body.review,
        rating:req.body.rating
    }
    _id+=1;
    fb.push(newFb);
    res.send(JSON.stringify(newFb));
})

app.put("/feedback/:ID", function(req,res){
    var ID = Number(req.params.ID)
    const newFb = req.body;
    for(let x in fb){
        if(fb[x].id===ID){
            fb[x].review=newFb.review;
            fb[x].rating=newFb.rating;
            break;
        }
    }
    res.send(JSON.stringify(fb));
})


app.delete("/feedback/:ID", function(req,res){
    var ID = Number(req.params.ID)
    for(let x in fb){
        if(fb[x].id===ID){
            fb.splice(x,1);
            break;
        }
    }
    res.send(JSON.stringify(fb));
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'front/build')));
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'front/build', 'index.html'));
    });
  }
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://shrouded-journey-38552.heroku...']
const corsOptions = {
origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
    callback(null, true)
    } else {
    callback(new Error('Not allowed by CORS'))
    }
}
}
app.use(cors(corsOptions))