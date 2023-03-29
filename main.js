const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Find the form element and attach a listener for when it's submitted
const form = document.querySelector('#my-form');
form.addEventListener('submit', (event) => {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Show the success message
    const successMessage = document.querySelector('#success-message');
    successMessage.style.display = 'block';

    // Clear the form fields
    form.reset();
});