function physicsWrapper () {
    try {
        let begin = Date.now();

        // physics();
        // draw();

        let delay = 1000 / UPS - (Date.now() - begin);
        // console.log(delay);
        setTimeout(physicsWrapper, delay);
    } catch (err) {
        console.error(err);
    }
}







function physics () {
    // console.log("physics");

    // enemy movement
    // player in enemy (game over)
    enemies.forEach(enemy => {
        enemy.x += enemy.speed;
        enemy.y += enemy.speed;

    });



    // enemie inside player (eat)



}