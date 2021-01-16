function warning(){
    if (item.value != '' && ul.children.length >= 8 && warnings.children.length < 1) {
        const p = document.createElement(`p`);
        p.innerText = `you have entered the maximum item list!`;
        warnings.appendChild(p);
        item.style.color = `red`;
    }
}