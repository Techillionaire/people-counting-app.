// document.getElementById("count-el").innerText=5;

// let count = 5;
// count = count + 1;
// console.log(count);
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}



function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}




























