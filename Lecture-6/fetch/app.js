

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(reponse){
    return reponse.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})












