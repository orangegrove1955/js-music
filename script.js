window.addEventListener('load', () => {
    // Get all sounds from page
    const sounds = document.querySelectorAll('.sound'),
    // Get all pads from page
    pads = document.querySelectorAll('.pads div');

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            // Play sound when clicked on
            sounds[index].play();
        })
    })
});