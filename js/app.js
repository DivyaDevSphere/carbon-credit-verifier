// Main application logic
console.log('Carbon Credit Verification Platform Initialized');

// DOM Elements
const landingPage = document.getElementById('landing-page');
const formSection = document.getElementById('form-section');
const getStartedBtn = document.getElementById('get-started-btn');

// Show form when "Get Started" is clicked
getStartedBtn.addEventListener('click', () => {
    landingPage.style.display = 'none';
    formSection.style.display = 'block';
});