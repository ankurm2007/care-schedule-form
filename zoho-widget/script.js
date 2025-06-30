
// Form handling
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'appointmentType', 'reasonForVisit'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
        showToast('Missing Information', 'Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        return;
    }
    
    // Log form data (in real implementation, this would be sent to a server)
    console.log('Appointment Data:', data);
    
    // Show success message
    showToast('Appointment Request Submitted', "We'll contact you within 24 hours to confirm your appointment.", 'success');
    
    // Reset form
    this.reset();
});

// Toast notification function
function showToast(title, message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${message}</div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger show animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 5000);
}

// Set minimum date to today for date inputs
const today = new Date().toISOString().split('T')[0];
const dateInputs = document.querySelectorAll('input[name="preferredDate"]');
dateInputs.forEach(input => {
    input.setAttribute('min', today);
});

// Set maximum date to 120 years ago for date of birth
const maxBirthDate = new Date();
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 120);
const dobInput = document.querySelector('input[name="dateOfBirth"]');
if (dobInput) {
    dobInput.setAttribute('max', today);
    dobInput.setAttribute('min', maxBirthDate.toISOString().split('T')[0]);
}
