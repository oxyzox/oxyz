gsap.registerPlugin(ScrollTrigger);

const messages = [
    '> Initializing systems...',
    '> Loading Website interface...',
    '> Initializing systems engaged...',
    '> Ready for deployment_'
];

let messageIndex = 0;
let charIndex = 0;
const typingText = document.getElementById('typing-text');

function typeWriter() {
    if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
            typingText.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            typingText.innerHTML += '<br>';
            charIndex = 0;
            messageIndex++;
            setTimeout(typeWriter, 500);
        }
    }
}

typeWriter();


gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power2.out"
    });
});

gsap.utils.toArray('.skill-item').forEach((skill, i) => {
    gsap.to(skill, {
        scrollTrigger: {
            trigger: skill,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out"
    });
});


document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.glow');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    glows.forEach((glow, index) => {
        const speed = index === 0 ? 0.05 : 0.03;
        const x = mouseX * speed;
        const y = mouseY * speed;
        glow.style.transform = `translate(${x}px, ${y}px)`;
    });
});
