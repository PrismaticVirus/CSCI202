let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("rickRoll");

let thirdClicked = false;
let backgroundClicked = false;
first.addEventListener('click', function(){
    first.style.display = 'none';
    document.body.style.backgroundColor = 'blue';
    second.style.display = 'inline-block';
})
second.addEventListener('click', function(){
    second.style.display = 'none';
    document.body.style.backgroundColor = 'lightcoral';
    third.style.display = 'inline-block';
})
third.addEventListener('click', function(){
    third.style.display = 'none';
    document.body.style.backgroundColor = 'goldenrod';
    fourth.style.display = 'inline-block';
    thirdClicked = true;
})
document.body.addEventListener('click', function(event){
    if (thirdClicked && event.target === document.body) {
        fourth.style.display = 'none';
        document.body.style.backgroundColor = 'green';
        fifth.style.display = 'inline-block'; 
        thirdClicked = false;
        backgroundClicked = true;
    }
})
document.addEventListener('keydown', function(event) {
    if (backgroundClicked && event.code === 'Space') {
        fifth.style.display = 'none';
        document.body.style.backgroundColor = 'purple';
        sixth.style.display = 'inline-block';
        backgroundClicked = false;
    }
}) 
sixth.addEventListener('click', function(){
    sixth.style.display = 'none';
    document.body.style.backgroundColor = 'black';
    first.style.display = 'inline-block';
})