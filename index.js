document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const textInput = document.getElementById('textInput');
            const rateInput = document.getElementById('rateInput');
            const volumeInput = document.getElementById('volumeInput');
            const speakBtn = document.getElementById('speakBtn');
            const stopBtn = document.getElementById('stopBtn');
            const statusDiv = document.getElementById('status');
            const rateValue = document.getElementById('rateValue');
            const volumeValue = document.getElementById('volumeValue');
            const themeToggle = document.getElementById('themeToggle');
            
            // Speech Synthesis
            const synth = window.speechSynthesis;
            let utterance = null;
            
            // Particles.js configuration
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#4361ee"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.3,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#4361ee",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 0.5
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });

            // Theme toggle
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const icon = themeToggle.querySelector('i');
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            });

            // Check for saved theme preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
                const icon = themeToggle.querySelector('i');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }

            // Update slider values
            rateInput.addEventListener('input', () => {
                rateValue.textContent = rateInput.value;
            });
            
            volumeInput.addEventListener('input', () => {
                volumeValue.textContent = volumeInput.value;
            });
            
            // Speak function - uses default system voice
            function speak() {
                if (synth.speaking) {
                    synth.cancel();
                }
                
                if (textInput.value.trim() !== '') {
                    utterance = new SpeechSynthesisUtterance(textInput.value);
                    
                    // Let the browser use its default voice
                    utterance.rate = parseFloat(rateInput.value);
                    utterance.volume = parseFloat(volumeInput.value);
                    
                    utterance.onstart = () => {
                        statusDiv.textContent = 'Speaking...';
                        statusDiv.classList.add('active');
                    };
                    
                    utterance.onend = () => {
                        statusDiv.textContent = 'Finished';
                        statusDiv.classList.remove('active');
                    };
                    
                    utterance.onerror = (event) => {
                        statusDiv.textContent = 'Error: ' + event.error;
                        statusDiv.classList.remove('active');
                    };
                    
                    synth.speak(utterance);
                } else {
                    statusDiv.textContent = 'Please enter some text';
                }
            }
            
            // Button events
            speakBtn.addEventListener('click', speak);
            
            stopBtn.addEventListener('click', () => {
                if (synth.speaking || synth.paused) {
                    synth.cancel();
                    statusDiv.textContent = 'Stopped';
                    statusDiv.classList.remove('active');
                }
            });
        });


        // ===============================

        // ...existing code...
const container = document.querySelector('.container');
// ...existing code...
utterance.onstart = () => {
    statusDiv.textContent = 'Speaking...';
    statusDiv.classList.add('active');
    container.classList.add('speaking-glow');
};
utterance.onend = () => {
    statusDiv.textContent = 'Finished';
    statusDiv.classList.remove('active');
    container.classList.remove('speaking-glow');
};
utterance.onerror = (event) => {
    statusDiv.textContent = 'Error: ' + event.error;
    statusDiv.classList.remove('active');
    container.classList.remove('speaking-glow');
};
