
let express = require('express'); //function
let app = express(); //object

// path parameter
app.get('/r/:subreddit' , (req,res)=>{
    let {subreddit} = (req.params);
    res.send(`page open hogya for ${subreddit}`);
})


// query parameter
app.get('/search' , (req,res)=>{
    let {name} = (req.query);
    res.send(`query sent at url ${name}`);
})


app.listen(8080 , ()=>{
    console.log('server connected at port 8080')
})