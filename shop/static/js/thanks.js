const container = document.querySelector('.animation-container');

const animate = () => {
    container.classList.add('animate');
    setTimeout(() => {
        container.classList.remove('animate');
    }, 2000);
};

animate();