const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hex colors have # and then 6 values - base16

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColor = '#';
    //need a loop to run 6 times
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()]; //0 is index, where items will start to be placed
        // if you don't use +=, system won't generate a string
    }
    color.textContent = hexColor; //to change the span value  
    document.body.style.backgroundColor = hexColor; //to change the background color
})

function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}
