/**
 * updates player position to mouse position and renders
 */
function mouseTracker (event) {
    // for center as origin
    // pX = event.clientX - (width / 2);
    // pY = (height / 2) - event.clientY;
    // pX = event.clientX;
    // pY = event.clientY;
    player.x = event.clientX;
    player.y = event.clientY;
    drawWrapper();
    // might be weird to draw both here and consistantly at certain fps
    // bust consistant drawing is needed when mouse isn't moving
    // and if we don't draw here then mouse start's stuttering
}