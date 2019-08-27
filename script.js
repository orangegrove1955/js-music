window.addEventListener('load', () => {
    // Get all sounds from page
    const sounds = document.querySelectorAll('.sound'),
    // Get all pads from page
    pads = document.querySelectorAll('.pads div'),
    // Get visual section of page
    visual = document.querySelector('.visual'),
    // Set colours for visual based on CSS values
    colours = [
        '#60d394',
        '#d36060',
        '#c050d3',
        '#d3d160',
        '#6860d3',
        '#60b2d3' 
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            // Reset sound timer and then play when clicked on
            sounds[index].currentTime = 0;
            sounds[index].play();
            bubbles(index);
        })
    });

    /** Function to create bubbles for visualiser 
     * @param index Index of pad to give colour
    */
    const bubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = "jump 1s linear"; 
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    };
});