



axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(resp){
    console.log(resp.data);
})
.catch(function(error){
    console.log(error)
})






