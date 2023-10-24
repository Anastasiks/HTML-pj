let a = 0
function funk(id) {
    a ++;
    let b = document.getElementById(id);
    let max_width = b.parentElement.clientWidth;
    let max_height = b.parentElement.clientHeight;
    b.style.top = Math.floor(Math.random() * (max_height - b.clientHeight)) + 'px';
    b.style.left = Math.floor(Math.random() * (max_width - b.clientWidth)) + 'px';
    if (a % 3 == 0){
        b.style.backgroundColor = "pink"
    }
    else if (a % 3 == 1){
        b.style.backgroundColor = "lightgreen"
    }
    else if (a % 3 == 2){
        b.style.backgroundColor = "lightblue"
    }
}