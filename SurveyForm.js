// Function to show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to submit the form
function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderInputs).map(input => input.value).join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if all fields are filled
    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        // Display values in the popup
        document.getElementById('popupFirstName').textContent = firstName;
        document.getElementById('popupLastName').textContent = lastName;
        document.getElementById('popupDOB
