const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const door = Door(context, 320, 144);
const player = Player(context, 304, 152);
let smokes = [];

let hitCount = 0;
let hitLeft = 100;

function setHitCount(count) {
  hitCount = count;
}

function doFrame(now) {
    if (hitCount > 0 && hitLeft > 0) {
      hitCount--;
      hitLeft--;

      let randomX = Math.floor(Math.random()*48) + 296;
      smokes.push(Smoke(context, randomX, 144));
      player.setXY(randomX, 152)
    }

    if (smokes.length > 5) {
      smokes.shift();
    }

    /* Update the sprites */
    if (hitLeft <= 0) {
      door.destroy();
    }

    door.update(now);
    for (let i = 0; i < smokes.length; i++) {
      smokes[i].update(now);
    }
    player.update(now);

    /* Clear the screen */
    context.clearRect(0, 0, canvas.width, canvas.height);

    /* Draw the sprites */
    door.draw();
    for (let i = 0; i < smokes.length; i++) {
      smokes[i].draw();
    }
    player.draw();

    /* How many hit left */
    context.font = "30px Consolas";
    context.fillStyle = "red";
    context.textAlign = "center";
    context.fillText(hitLeft, 320, 120);

    /* Process the next frame */
    requestAnimationFrame(doFrame);
}

/* Start the animation */
requestAnimationFrame(doFrame);