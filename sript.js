const groceries = document.getElementsByClassName('list') [0];
const inputUser = document.getElementById('inputText');
const allItems = document.getElementById('allItems');
const pencil = document.getElementById('deleteItems');

// to delete all items from list
pencil.addEventListener('click', function (){
    allItems.innerHTML = ''
})


inputUser.addEventListener('keydown', function (event){
    if(event.key == "Enter")
        addItem();
})

// enter new items on the list
function addItem(){
    var h2 = document.createElement('h2');
    h2.innerHTML = '- ' + inputUser.value;

// add line to risk from list
    h2.addEventListener('click', function (){
        h2.style.textDecoration = 'line-through';
    })

    allItems.insertAdjacentElement('beforeend', h2)
    inputUser.value = ''
}


