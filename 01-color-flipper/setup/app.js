//array of four items
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color"); //for color span

btn.addEventListener("click", function () {
    //need to get a random number between 1 and 3 
    const RandomNum = getRandomNum();
    console.log(RandomNum); //to show in console

    document.body.style.backgroundColor = colors[RandomNum];

    //to display the current color 
    color.textContent = colors[RandomNum];
});

function getRandomNum() {
    //return Math.random; will give numbers between 0 and 1, not 1 itself   
    return Math.floor(Math.random() * colors.length); //to produce number upto 4
    //using math.floor to help produce the greates integer less than or equal to the number


}