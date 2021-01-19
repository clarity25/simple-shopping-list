
const addItem = document.querySelector('#submit').addEventListener('click', addtems);

const cancelbtn = document.querySelector('#cancel').addEventListener('click', function(){
    item.value = '';
});

function addtems(){
    if(item.value != '' && ul.children.length < 8){
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
        doneItembtn.innerHTML = '✓';
        newItem.appendChild(doneItembtn);

        clickEffect.play();
    }else{warning()}
}