
// Function to validate form entries
function validateForm(event) {
    event.preventDefault();
    let form = document.forms['sightingForm'];
    // Variables to target form entry values
    let firstname = document.getElementById('first').value;
    let lastname = document.getElementById('surname').value;
    let animalclass = document.getElementById('animalClass').selectedIndex;
    // Variables to target form validation span elements
    let firstValidate = document.getElementById('firstError');
    let lastValidate = document.getElementById('surnameError');
    let animalValidate = document.getElementById('animalError');
    let formValidate = document.getElementById('formValidate');
    // Conditions to check form entries and display validation messages
    if (firstname === "") {
        firstValidate.textContent = "Please enter your first name";
        formValidate.textContent = "Please enter all required fields";
    } else if (lastname === "") {
        lastValidate.textContent = "Please enter your last name";
        formValidate.textContent = "Please enter all required fields";
        firstValidate.setAttribute('style', 'color: mediumseagreen');
        firstValidate.textContent = "Success!";
    } else if (animalclass <= 0) {
        animalValidate.textContent = "Please select an animal class";
        formValidate.textContent = "Please enter all required fields";
        firstValidate.setAttribute('style', 'color: mediumseagreen');
        lastValidate.setAttribute('style', 'color: mediumseagreen');
        firstValidate.textContent = "Success!";
        lastValidate.textContent = "Success!";
    } else {
        form.submit();
    }
};
