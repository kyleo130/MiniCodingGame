const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const player = Player(context, 304, 160);

function doFrame(now) {

    /* Update the sprites */
    player.update(now);

    /* Clear the screen */
    context.clearRect(0, 0, canvas.width, canvas.height);

    /* Draw the sprites */
    player.draw();

    /* Process the next frame */
    requestAnimationFrame(doFrame);
}

/* Start the game */
requestAnimationFrame(doFrame);

/*
fetch("background1.png")
  .then(response => response.blob())
  .then(blob => createImageBitmap(blob))
  .then(() => {
    player.draw();
  });
*/