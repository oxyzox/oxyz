        // Register ScrollTrigger plugin
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

        // Animate project cards on scroll
        gsap.utils.toArray('.project-card').forEach(card => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Animate skill items on scroll
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