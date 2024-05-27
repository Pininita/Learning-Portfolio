document.addEventListener('DOMContentLoaded', function() {
    const formBoxMode = document.querySelector('.form-box-mode');
    formBoxMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

