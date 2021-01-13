
const item = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.querySelector('li');

const addItem = document.querySelector('#submit').addEventListener('click', addtems);
ul.addEventListener('click', deleteItemFunction);
ul.addEventListener('click', done);

const cancelbtn = document.querySelector('#cancel').addEventListener('click', function(){
    item.value = '';
});

function addtems(){
    if(item.value != ''){
        const newItem = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = item.value;
        ul.appendChild(newItem);
        newItem.appendChild(span)
        item.value = '';
        
        const deleteItembtn = document.createElement('button');
        deleteItembtn.className = 'delete';
        deleteItembtn.innerHTML = 'x';
        newItem.appendChild(deleteItembtn);

        const doneItembtn = document.createElement('button');
        doneItembtn.className = 'done';
        doneItembtn.innerHTML = '/';
        newItem.appendChild(doneItembtn);
       
    }
}

function deleteItemFunction(e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
}

function done(e){
    if(e.target.classList.contains('done')){
        let li = e.target.parentElement;
        li.firstElementChild.style.color = 'blue';
    }
}