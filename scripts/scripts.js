// ============================================================
// HAIL MACBETH — page scripts
// ============================================================

// ---------- System log clock ----------
document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector('#datetime');
    if (!el) return;

    function update() {
        const d = new Date();
        let h = d.getHours();
        const m = d.getMinutes().toString().padStart(2, '0');
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        const offset = -d.getTimezoneOffset() / 60;
        el.textContent = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()} ${h}:${m} ${ampm} GMT ${offset >= 0 ? '+' : ''}${offset}`;
    }
    update();
    setInterval(update, 1000);
});

// ---------- Glitch: Rise → Fall ----------
document.addEventListener("DOMContentLoaded", function () {
    const word = document.querySelector('.glitch-word');
    if (!word) return;

    function glitch() {
        word.textContent = 'Fall';
        word.classList.add('glitching');
        setTimeout(function () {
            word.textContent = 'Rise';
            word.classList.remove('glitching');
        }, 500);
    }

    setInterval(function () {
        if (Math.random() < 0.5) glitch();
    }, 500);
});

