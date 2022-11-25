function physicsWrapper () {
    try {
        let begin = Date.now();

        physics();

        let delay = 1000 / UPS - (Date.now() - begin);
        setTimeout(physics, delay);
    } catch (err) {
        console.error(err);
    }
}

function physics () {
}