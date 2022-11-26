

function delayedRepetition (func, delay) {
    try {
        let begin = Date.now();

        func();

        let delta = (Date.now() - begin);
        setTimeout(() => {
            delayedRepetition(func, delay);
        }, delay - delta);
    } catch (err) {
        console.error(`ERROR AT ${func}`);
        console.error(err);
    }
}
function run () {
    // console.log("running", Math.random());
}

delayedRepetition(run, 1000);



setInterval(() => {

    enemies.forEach(enemy => {
        console.log(enemy.x);
        enemy.x += enemy.speed / 100;
        enemy.y += enemy.speed / 100;

    });
    draw();
}, 10);