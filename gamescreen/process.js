const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const player = Player(context, 160, 288);

// function doFrame(now) {

//     /* Update the sprites */
//     player.update(now);

//     /* Clear the screen */
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     /* Draw the sprites */
//     player.draw();

//     /* Process the next frame */
//     requestAnimationFrame(doFrame);
// }

// /* Start the game */
// requestAnimationFrame(doFrame);

let sheet = new Image();
sheet.src = "asset/Players/players blue x1.png";
context.drawImage(sheet,0,0,32,32,144,272,32,32);