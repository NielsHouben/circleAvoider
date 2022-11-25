
function physicsWrapper () {
    try {
        physics();
        let begin = Date.now();
        let delay = 1000 / UPS - (Date.now() - begin);
        setTimeout(physics, delay);
    } catch (err) {
        console.error(err);
    }

}

function physics () {
    v += Math.PI / 720;
    // r = 200 * Math.abs(Math.cos(v + Math.PI / 2));
}