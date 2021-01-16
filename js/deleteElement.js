
ul.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        ul.removeChild(li);

        item.style.color = `#242424`;

        if (warnings.children.length === 1) {
            const p = warnings.firstElementChild;
            warnings.removeChild(p);
            
        }
    }
});


//Calling a Named function with event listener//
ul.addEventListener('click', done);

function done(e){
    if(e.target.classList.contains('done')){
        let li = e.target.parentElement;
        li.lastElementChild.className = 'btndone';
        li.firstElementChild.className = 'purchased';        
    }
}