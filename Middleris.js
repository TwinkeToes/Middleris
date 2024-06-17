document.addEventListener("DOMContentLoaded", function() {
    const Block = document.querySelector('#Block'); // little blocks lol
    let score = 0; // score for the game
    let blockPosition = 0; // px position for the blocks
    let shape = Math.floor(Math.random() * 7); // a variable that picks what shape 
    var Interval = setInterval(spostaDiv, 90);
    var gravity = 0;

    let l = window.screen.width;
    let w = 130;

    function spostaDiv() {
        console.log(w);
        if (gravity >= l) { 
            gravity = 0;
           
            shape = Math.floor(Math.random() * 7);
            Block.style.marginTop = "0px"; 
        } else {
            Block.style.marginTop = gravity + "px"; 
        }
        gravity += 7;
        console.log(shape);
        if (shape == 0) {
            console.log('O-Block');
        }
        if (shape == 1) {
            console.log('I-Block');
        }
        if (shape == 2) {
            console.log('S-Block');
        }
        if (shape == 3) {
            console.log('Z-Block');
        }
        if (shape == 4) {
            console.log('L-Block');
        }
        if (shape == 5) {
            console.log('J-Block');
        }
        if (shape == 6) {
            console.log('T-Block');
        }
    }
});
