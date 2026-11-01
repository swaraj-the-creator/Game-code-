const animations = {
    idle: ["assets/goku_idle.png"],
    run: ["assets/goku_run_01.png", "assets/goku_run_02.png"],
    punch: ["assets/goku_punch_01.png", "assets/goku_punch_02.png"],
    special: ["assets/goku_special_01.png", "assets/goku_special_02.png"]
};

let currentState = "idle";
let frameIndex = 0;
let frameTimer = 0;

function updateAnimation(dt) {
    frameTimer -= dt;
    if (frameTimer <= 0) {
        frameTimer = 0.08;
        frameIndex = (frameIndex + 1) % animations[currentState].length;
    }
}