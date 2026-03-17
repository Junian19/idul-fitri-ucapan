// ========== AMBIL ELEMEN ==========
const celebrateBtn = document.getElementById('celebrateBtn');
const message = document.getElementById('message');
const moon = document.getElementById('moon');
const card = document.querySelector('.card');
const ketupats = document.querySelectorAll('.ketupat');
const stars = document.querySelectorAll('.star');
const effectContainer = document.getElementById('effect-container');

// ========== DATA UNTUK EFEK ==========
// Array pesan ucapan
const祝福Messages = [
    "✨ Taqabbalallahu minna wa minkum ✨",
    "🌙 Mohon maaf lahir dan batin 🌙",
    "🕋 Semoga amal ibadah kita diterima 🕋",
    "🌟 Selamat Idul Fitri, mohon maaf lahir & batin 🌟",
    "🕌 Mari sambut fitrah yang suci 🕌",
    "☪️ Minal aidin wal faizin ☪️",
    "⭐ Semoga kita kembali suci ⭐",
    "🌙 Selamat Idul Fitri, taqabbalallahu minna wa minkum 🌙",
    "🌸 Mohon maaf atas segala khilaf 🌸",
    "🕊️ Semoga kedamaian menyertai kita 🕊️"
];

// Array emoji untuk partikel
const celebrationEmojis = ['✨', '🌟', '⭐', '🌙', '🕌', '🕋', '🏮', '🎆', '🎇', '🌸', '🌺', '🌷', '☪️', '🕊️'];

// Array warna untuk confetti
const confettiColors = [
    '#FFD700', '#FFA500', '#FF8C00', '#FFB6C1', '#FF69B4', 
    '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C', '#E6E6FA'
];

// ========== FUNGSI-FUNGSI EFEK ==========

/**
 * Fungsi utama untuk memicu semua efek menarik
 */
function createAmazingEffects() {
    // Nonaktifkan tombol sementara
    celebrateBtn.disabled = true;
    celebrateBtn.style.opacity = '0.7';
    
    // 1. Efek Confetti (100 partikel)
    createConfetti(100);
    
    // 2. Efek Glow Overlay
    createGlowOverlay();
    
    // 3. Efek Floating Messages (8 pesan)
    createFloatingMessages(8);
    
    // 4. Efek Ripple dari tombol
    createRippleEffect();
    
    // 5. Efek Flash pada Card
    card.classList.add('card-flash');
    
    // 6. Efek Highlight pada Ketupat
    ketupats.forEach(ketupat => {
        ketupat.classList.add('ketupat-highlight');
    });
    
    // 7. Efek Blast pada Bulan
    moon.classList.add('moon-blast');
    
    // 8. Efek Burst pada Semua Bintang
    stars.forEach(star => {
        star.classList.add('star-burst');
    });
    
    // 9. Efek Sparkle pada Teks Judul
    const title = document.querySelector('h1');
    title.classList.add('text-sparkle');
    
    // 10. Efek Rotasi pada Dekorasi
    const decorations = document.querySelectorAll('h1::before, h1::after');
    document.querySelectorAll('h1').forEach(el => {
        el.classList.add('rotate-decoration');
    });
    
    // 11. Efek Partikel Bintang (30 bintang terbang)
    createStarParticles(30);
    
    // 12. Efek Pelangi (Rainbow Line)
    createRainbowLine();
    
    // 13. Efek Pesan Kejutan di Tengah (3 kali)
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createSurpriseMessage();
        }, i * 600);
    }
    
    // 14. Efek Getaran Halus pada Card
    card.style.transform = 'scale(1.02)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 500);
    
    // 15. Efek Kedipan pada Tombol
    celebrateBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        celebrateBtn.style.transform = '';
    }, 300);
    
    // Hapus semua kelas efek setelah selesai
    setTimeout(() => {
        card.classList.remove('card-flash');
        ketupats.forEach(ketupat => {
            ketupat.classList.remove('ketupat-highlight');
        });
        moon.classList.remove('moon-blast');
        stars.forEach(star => {
            star.classList.remove('star-burst');
        });
        title.classList.remove('text-sparkle');
        document.querySelectorAll('h1').forEach(el => {
            el.classList.remove('rotate-decoration');
        });
        
        // Aktifkan tombol kembali
        celebrateBtn.disabled = false;
        celebrateBtn.style.opacity = '1';
    }, 2000);
}

/**
 * Membuat efek confetti
 */
function createConfetti(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-particle';
            
            // Posisi acak
            const startX = Math.random() * window.innerWidth;
            confetti.style.left = startX + 'px';
            confetti.style.top = '-10px';
            
            // Warna acak
            const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.background = `linear-gradient(135deg, ${color}, ${color}dd)`;
            
            // Ukuran acak
            const width = 5 + Math.random() * 10;
            const height = 10 + Math.random() * 20;
            confetti.style.width = width + 'px';
            confetti.style.height = height + 'px';
            
            // Rotasi acak
            const rotation = Math.random() * 360;
            confetti.style.transform = `rotate(${rotation}deg)`;
            
            // Durasi acak
            const duration = 2 + Math.random() * 2;
            confetti.style.animation = `confettiFall ${duration}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            // Hapus setelah animasi
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, i * 20); // Staggered
    }
}

/**
 * Membuat efek glow overlay
 */
function createGlowOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'glow-overlay';
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.remove();
    }, 2000);
}

/**
 * Membuat floating messages
 */
function createFloatingMessages(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const message = document.createElement('div');
            message.className = 'floating-message';
            
            // Pesan acak
            const randomMsg = 祝福Messages[Math.floor(Math.random() * 祝福Messages.length)];
            message.textContent = randomMsg;
            
            // Posisi horizontal acak
            const left = 10 + Math.random() * 80; // 10% - 90%
            message.style.left = left + '%';
            message.style.bottom = '-10%';
            
            // Delay animasi
            message.style.animationDelay = (Math.random() * 0.5) + 's';
            
            document.body.appendChild(message);
            
            // Hapus setelah animasi
            setTimeout(() => {
                message.remove();
            }, 4500);
        }, i * 300);
    }
}

/**
 * Membuat efek ripple dari tombol
 */
function createRippleEffect() {
    const rect = celebrateBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = centerX + 'px';
            ripple.style.top = centerY + 'px';
            
            // Ukuran berbeda untuk setiap ripple
            const size = 100 + i * 50;
            ripple.style.animation = `rippleAnim ${1.5 + i * 0.3}s ease-out forwards`;
            
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 2000);
        }, i * 200);
    }
}

/**
 * Membuat partikel bintang terbang
 */
function createStarParticles(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'particle-star';
            
            // Pilih emoji acak
            const emoji = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
            star.textContent = emoji;
            
            // Posisi horizontal acak
            const left = Math.random() * window.innerWidth;
            star.style.left = left + 'px';
            
            // Animasi variasi
            const duration = 1.5 + Math.random() * 1.5;
            star.style.animation = `starFly ${duration}s ease-out forwards`;
            
            document.body.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, duration * 1000);
        }, i * 50);
    }
}

/**
 * Membuat rainbow line yang melintas
 */
function createRainbowLine() {
    const line = document.createElement('div');
    line.className = 'rainbow-line';
    line.style.top = '50%';
    document.body.appendChild(line);
    
    setTimeout(() => {
        line.remove();
    }, 2000);
}

/**
 * Membuat pesan kejutan di tengah layar
 */
function createSurpriseMessage() {
    const msg = document.createElement('div');
    const random祝福 = 祝福Messages[Math.floor(Math.random() * 祝福Messages.length)];
    
    msg.textContent = random祝福;
    msg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #0a2f35, #1a4a4f);
        color: gold;
        padding: 25px 50px;
        border-radius: 80px;
        font-size: 28px;
        font-weight: bold;
        box-shadow: 0 20px 50px rgba(255,215,0,0.7), 0 0 0 4px gold;
        z-index: 10002;
        border: 3px solid white;
        text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
        animation: surpriseAnim 2s ease-in-out forwards;
        white-space: nowrap;
    `;
    
    // Tambah style animasi
    const style = document.createElement('style');
    style.textContent = `
        @keyframes surpriseAnim {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3);
            }
            20% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            40% {
                transform: translate(-50%, -50%) scale(1);
            }
            80% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -80%) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.remove();
        style.remove();
    }, 2000);
}

/**
 * Membuat efek tambahan: lingkaran cahaya di sekitar elemen
 */
function createLightCircle(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const circle = document.createElement('div');
    circle.style.cssText = `
        position: fixed;
        left: ${centerX}px;
        top: ${centerY}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        animation: circleExpand 1.5s ease-out forwards;
        pointer-events: none;
        z-index: 9995;
    `;
    
    const circleStyle = document.createElement('style');
    circleStyle.textContent = `
        @keyframes circleExpand {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 400px;
                height: 400px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(circleStyle);
    
    document.body.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
        circleStyle.remove();
    }, 1500);
}

// ========== EVENT LISTENERS ==========

// Event klik tombol
celebrateBtn.addEventListener('click', createAmazingEffects);

// Efek kecil saat bulan diklik
moon.addEventListener('click', () => {
    // Efek mini celebration
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'particle-star';
            star.textContent = '✨';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.animation = 'starFly 1.5s ease-out forwards';
            document.body.appendChild(star);
            
            setTimeout(() => star.remove(), 1500);
        }, i * 50);
    }
    
    moon.classList.add('moon-blast');
    setTimeout(() => {
        moon.classList.remove('moon-blast');
    }, 800);
    
    // Buat lingkaran cahaya
    createLightCircle(moon);
});

// Keyboard shortcut (Enter)
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !celebrateBtn.disabled) {
        createAmazingEffects();
    }
});

// Efek hover pada bintang
stars.forEach(star => {
    star.addEventListener('mouseenter', () => {
        star.style.transform = 'scale(1.8)';
        star.style.transition = 'transform 0.3s ease';
    });
    
    star.addEventListener('mouseleave', () => {
        star.style.transform = '';
    });
});

// ========== INISIALISASI ==========

// Auto celebration saat halaman dimuat
window.addEventListener('load', () => {
    setTimeout(() => {
        createAmazingEffects();
    }, 1000);
});

// Welcome message di console
console.log('%c✨✨✨ SELAMAT HARI RAYA IDUL FITRI 1446 H ✨✨✨', 'color: gold; font-size: 20px; font-weight: bold;');
console.log('%c🌙 Taqabbalallahu minna wa minkum 🌙', 'color: orange; font-size: 16px;');
console.log('%c🕌 Mohon Maaf Lahir & Batin 🕌', 'color: #ff8c00; font-size: 16px;');

// Tambah efek resize untuk menyesuaikan posisi
window.addEventListener('resize', () => {
    // Tidak perlu action khusus
});
