// selection process
const inputEl = document.getElementById('title');

const listEl = document.querySelector('#list');

const addButton = document.getElementById('btn');

// add event  

addButton.addEventListener('click' , function(){

    // getting input ki value
    let titileText = inputEl.value;

    // create a li
    let li = document.createElement('li');

    // appending the value in li
    li.innerText = titileText;

    // appening the li in ul
    listEl.appendChild(li);
    
    // empty the input
    inputEl.value = ""

    // remove the li
    li.addEventListener('click' , function(){
        li.remove();
    })
})








