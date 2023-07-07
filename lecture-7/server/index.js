
let express = require('express'); //returns a function
let app = express(); //returns an object
let path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname , 'public')))



app.get('/' , (req,res)=>{
    res.send('hi you hit the right path');
} )


app.get('/samarth' , (req,res)=>{
    res.send("samarth hit the path")
})



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
} )
