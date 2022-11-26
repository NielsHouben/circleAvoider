function drawWrapper () {
    try {
        let begin = Date.now();

        draw();

        let delay = 1000 / FPS - (Date.now() - begin);
        setTimeout(drawWrapper, delay);
    } catch (err) {
        console.error(err);
    }
}

function grid () {
    // line(height/2)
}
function drawEnemies () {
    enemies.forEach(enemy => {
        point(enemy.x, enemy.y, enemy.size, enemy.color);
    });
    // line(height/2)
}

function draw () {
    // set defaults and clear screen
    ctx.fillStyle = "#202124";
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 5;
    ctx.fillStyle = "rgb(255, 255, 255)";

    grid();



    // draw player
    point(player.x, player.y, 10 + player.size);


    drawEnemies();


}
