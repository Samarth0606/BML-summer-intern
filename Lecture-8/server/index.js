
let express = require('express'); //function
let app = express(); //object



app.get('/' , (req,res)=>{
    res.send('response sent successfully')
})

app.get('/cat' , (req,res)=>{
    res.send('<h1>meoow</h1>')
})

app.get('/dog' , (req,res)=>{
    res.send('<h1>woof</h1>')
})
app.get('*' , (req,res)=>{
    res.send('<h2>invalid url</h2>')
})



app.listen(8080 , ()=>{
    console.log('server connected at port 8080')
})