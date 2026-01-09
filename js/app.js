console.log('Carbon Credit Verification Platform Initialized');

const landingPage = document.getElementById('landing-page');
const formSection = document.getElementById('form-section');
const resultsSection = document.getElementById('results-section');
const getStartedBtn = document.getElementById('get-started-btn');
const backBtn = document.getElementById('back-btn');
const projectForm = document.getElementById('project-form');

getStartedBtn.addEventListener('click', () => {
    landingPage.style.display = 'none';
    formSection.style.display = 'block';
});

backBtn.addEventListener('click', () => {
    formSection.style.display = 'none';
    landingPage.style.display = 'block';
});

projectForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        projectType: document.getElementById('project-type').value,
        location: document.getElementById('location').value,
        capacity: document.getElementById('capacity').value,
        duration: document.getElementById('duration').value,
        co2Claim: document.getElementById('co2-claim').value
    };

    console.log('Form submitted:', formData);
    
    formSection.style.display = 'none';
    resultsSection.style.display = 'block';
    resultsSection.innerHTML = '<p>Processing verification...</p>';
});