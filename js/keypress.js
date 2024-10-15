document.addEventListener('keydown', (event) => {
    const code = event.code.toLowerCase();
    const keyElements = document.querySelectorAll(`.key[data-key="${code}"]`);
    keyElements.forEach(keyElement => {
        keyElement.classList.add('pressed');
        setTimeout(() => {
            keyElement.classList.remove('pressed');
        }, 1000);
    });
});

document.addEventListener('keyup', (event) => {
    const code = event.code.toLowerCase();
    const keyElements = document.querySelectorAll(`.key[data-key="${code}"]`);
    keyElements.forEach(keyElement => {
        keyElement.classList.remove('pressed');
    });
});