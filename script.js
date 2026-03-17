// Get elements
const celebrateBtn = document.getElementById('celebrateBtn');
const message = document.getElementById('message');
const moon = document.getElementById('moon');
const card = document.querySelector('.card');
const ketupats = document.querySelectorAll('.ketupat');
const stars = document.querySelectorAll('.star');

// Array of祝福 messages
const祝福Messages = [
    "✨ Taqabbalallahu minna wa minkum ✨",
    "🌙 Mohon maaf lahir dan batin 🌙",
    "🕋 Semoga amal ibadah kita diterima 🕋",
    "🌟 Selamat Idul Fitri, mohon maaf lahir & batin 🌟",
    "🕌 Mari sambut fitrah yang suci 🕌",
    "☪️ Minal aidin wal faizin ☪️",
    "⭐ Semoga kita kembali suci ⭐",
    "🌙 Selamat Idul Fitri, taqabbalallahu minna wa minkum 🌙"
];

// Array of emojis for particles
const celebrationEmojis = ['✨', '🌟', '⭐', '🌙', '🕌', '🕋', '🏮', '🎆', '🎇', '🌸', '🌺', '🌷'];

// Function to create celebration effect
function createCelebration() {
    // Disable button temporarily to prevent spam
    celebrateBtn.disabled = true;
    celebrateBtn.style.opacity = '0.7';
    
    // 1. Create glow overlay
    const glowOverlay = document.createElement('div');
    glowOverlay.className = 'glow-overlay';
    document.body.appendChild(glowOverlay);

    // 2. Flash the message card
    message.classList.add('message-flash');

    // 3. Highlight ketupats
    ketupats.forEach(ketupat => {
        ketupat.classList.add('ketupat-highlight');
    });

    // 4. Create particles (50-70 particles)
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 30); // Stagger the particles
    }

    // 5. Create random祝福 messages floating
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingMessage();
        }, i * 200);
    }

    // 6. Animate moon
    moon.style.transform = 'scale(1.3) rotate(15deg)';
    setTimeout(() => {
        moon.style.transform = '';
    }, 500);

    // 7. Animate stars
    stars.forEach((star, index) => {
        setTimeout(() => {
            star.style.transform = 'scale(2)';
            star.style.opacity = '1';
            setTimeout(() => {
                star.style.transform = '';
            }, 300);
        }, index * 100);
    });

    // 8. Animate card
    card.style.transform = 'scale(1.02)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 500);

    // 9. Show random祝福 in message
    const random祝福 =祝福Messages[Math.floor(Math.random() *祝福Messages.length)];
    
    // Create temporary祝福 element
    const祝福Element = document.createElement('div');
   祝福Element.textContent = random祝福;
   祝福Element.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #0a2f35, #1a4a4f);
        color: #ffd700;
        padding: 20px 40px;
        border-radius: 60px;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 15px 40px rgba(255,215,0,0.5), 0 0 0 3px gold;
        z-index: 100;
        animation:祝福Appear 2s ease-in-out forwards;
        white-space: nowrap;
        border: 2px solid white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    `;

    // Add祝福 animation
    const祝福Style = document.createElement('style');
   祝福Style.textContent = `
        @keyframes祝福Appear {
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
    document.head.appendChild(祝福Style);

    message.style.position = 'relative';
    message.appendChild(祝福Element);

    // Remove祝福 after animation
    setTimeout(() => {
        祝福Element.remove();
        祝福Style.remove();
    }, 2000);

    // Remove all effects after animation
    setTimeout(() => {
        glowOverlay.remove();
        message.classList.remove('message-flash');
        ketupats.forEach(ketupat => {
            ketupat.classList.remove('ketupat-highlight');
        });
        
        // Re-enable button
        celebrateBtn.disabled = false;
        celebrateBtn.style.opacity = '1';
    }, 2000);
}

// Function to create a single particle
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'celebration-particle';
    
    // Random emoji
    const randomEmoji = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
    particle.textContent = randomEmoji;
    
    // Random position (across the whole screen)
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight - 50; // Start from bottom
    
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    
    // Random animation duration
    const duration = 1.5 + Math.random() * 1.5;
    particle.style.animation = `particleAnimation ${duration}s ease-out forwards`;
    
    // Random size
    const size = 20 + Math.floor(Math.random() * 30);
    particle.style.fontSize = size + 'px';
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Function to create floating祝福 message
function createFloatingMessage() {
    const floating祝福 = document.createElement('div');
    const random祝福 =祝福Messages[Math.floor(Math.random() *祝福Messages.length)];
    floating祝福.textContent = random祝福;
    
    // Random position
    const left = 10 + Math.random() * 80; // 10% - 90% of screen width
    
    floating祝福.style.cssText = `
        position: fixed;
        left: ${left}%;
        top: 110%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, rgba(10, 47, 53, 0.9), rgba(26, 74, 79, 0.9));
        color: gold;
        padding: 12px 25px;
        border-radius: 50px;
        font-size: 18px;
        font-weight: bold;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3), 0 0 0 2px gold;
        z-index: 10000;
        border: 1px solid white;
        backdrop-filter: blur(5px);
        animation: floatUp 3s linear forwards;
        pointer-events: none;
        white-space: nowrap;
    `;

    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatUp {
            0% {
                top: 110%;
                opacity: 0;
                transform: translateX(-50%) scale(0.5);
            }
            20% {
                opacity: 1;
                transform: translateX(-50%) scale(1);
            }
            80% {
                opacity: 1;
                transform: translateX(-50%) scale(1);
            }
            100% {
                top: -10%;
                opacity: 0;
                transform: translateX(-50%) scale(0.5);
            }
        }
    `;
    document.head.appendChild(floatStyle);

    document.body.appendChild(floating祝福);

    // Remove after animation
    setTimeout(() => {
        floating祝福.remove();
        floatStyle.remove();
    }, 3000);
}

// Add click effect to moon
moon.addEventListener('click', () => {
    // Small celebration on moon click
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 50);
    }
    
    moon.style.transform = 'scale(1.4) rotate(20deg)';
    setTimeout(() => {
        moon.style.transform = '';
    }, 400);
});

// Event listener for celebrate button
celebrateBtn.addEventListener('click', createCelebration);

// Add keyboard shortcut (Enter key)
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !celebrateBtn.disabled) {
        createCelebration();
    }
});

// Welcome message
console.log('✨✨✨ Selamat Hari Raya Idul Fitri 1446 H ✨✨✨');
console.log('🌙 Taqabbalallahu minna wa minkum 🌙');
console.log('🕌 Mohon Maaf Lahir & Batin 🕌');

// Auto celebration on page load (after a short delay)
window.addEventListener('load', () => {
    setTimeout(() => {
        createCelebration();
    }, 800);
});