document.addEventListener("DOMContentLoaded", function() {
    const marqueeContent = document.querySelector('.marquee-content');
    const titles = [
        "Reports from the front: war with Norway rages on.",
        "King Duncan: ‘Victory is within our grasp.’",
        "Macbeth, Thane of Glamis, to lead in heroic effort with General Banquo.",
        "Mystery surrounds enemy's knowledge of Scottish defenses.",
        "Rumors of high-level betrayal in Scottish ranks."
    ];

    let currentIndex = 0;

    function updateMarquee() {
        if (currentIndex % 2 === 0) {
            marqueeContent.innerHTML = `<p>${titles[Math.floor(currentIndex / 2)]}</p>`;
        } else {
            marqueeContent.innerHTML = `<p class="white">Cinematic videogame: COMING SOON</p>`;
        }
        currentIndex = (currentIndex + 1) % (titles.length * 2);
    }

    // Update the marquee content every time the animation restarts
    marqueeContent.addEventListener('animationiteration', updateMarquee);
});

// Update the content of the span #id=datetime with the current date and time every second
// The format should be MM/DD/YYYY HH:MM AM/PM GMT +0 (where 0 is the current time zone offset)
document.addEventListener("DOMContentLoaded", function() {
    const dateTime = document.querySelector('#datetime');

    function updateDateTime() {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const offset = -date.getTimezoneOffset() / 60;

        dateTime.textContent = `${month}/${day}/${year} ${hours}:${minutes} ${ampm} GMT ${offset >= 0 ? '+' : ''}${offset}`;
    }

    setInterval(updateDateTime, 1000);
});

// Glitch
document.addEventListener("DOMContentLoaded", function() {
    const glitchWord = document.querySelector('.glitch-word');

    function triggerGlitch() {
        const randX = Math.random() * 1.5; // Random horizontal multiplier
        const randY = Math.random() * 1.5; // Random vertical multiplier
        glitchWord.style.setProperty('--rand-x', randX);
        glitchWord.style.setProperty('--rand-y', randY);

        glitchWord.textContent = 'Fall';
        glitchWord.style.color = 'var(--color-text)'; // Glitched Color
        glitchWord.classList.add('glitching');
        setTimeout(() => {
            glitchWord.textContent = 'Rise';
            glitchWord.style.color = 'var(--color-text)'; // Original Color
            glitchWord.classList.remove('glitching');
        }, 500);
    }

    setInterval(() => {
        if (Math.random() < 0.5) { // 50% chance to trigger the glitch
            triggerGlitch();
        }
    }, 500);
});

// Randomize the video to load at launch, choose between logo_crt_red.mp4 and logo_crt_rgb.mp4
document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('#logo_crt');
    const videoSource = document.querySelector('source');

    videoSource.src = Math.random() < 0.5 ? 'assets/video/logo_crt_red.mp4' : 'assets/video/logo_crt_rgb.mp4';
    video.load();
});

document.addEventListener("DOMContentLoaded", function() {
    const crEmpty = document.getElementById('cr_empty');
    const header = document.querySelector('header'); // Get the header element
    const headerHeight = header.offsetHeight; // Get the height of the header

    function updatePosition() {
        const scrollPosition = window.scrollY; // Current vertical scroll position
        const headerHeight = header.offsetHeight; // Get the height of the header

        // Calculate the interpolation factor (0 to 1)
        const factor = Math.min(1, scrollPosition / headerHeight);

        // Interpolate the position from 0vw to -100vw
        const newPosition = -100 * factor;

        crEmpty.style.transform = `translateX(${newPosition}vw)`;
    }

    // Attach the event listeners
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('touchmove', updatePosition);
});