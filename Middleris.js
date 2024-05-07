document.addEventListener("DOMContentLoaded", function () {
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
        } else {
            Block.style.marginLeft = gravity + "px";
        }
        gravity += 7;
    } // gravity
});
