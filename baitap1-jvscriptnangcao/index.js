document.querySelectorAll(".drum").forEach(btn => {
    btn.addEventListener("click", () => {
        playSound(btn.innerText.toLowerCase());
    });
});

document.addEventListener("keydown", e => {
    playSound(e.key.toLowerCase());
});

function playSound(key) {
    let soundPath = "";

    switch (key) {
        case "w": soundPath = "sounds/tom-1.mp3"; break;
        case "a": soundPath = "sounds/tom-2.mp3"; break;
        case "s": soundPath = "sounds/tom-3.mp3"; break;
        case "d": soundPath = "sounds/tom-4.mp3"; break;
        case "j": soundPath = "sounds/snare.mp3"; break;
        case "k": soundPath = "sounds/crash.mp3"; break;
        case "l": soundPath = "sounds/kick-bass.mp3"; break;
        default: return;
    }

    const audio = new Audio(soundPath);
    audio.play().catch(err => console.log(err));
}
