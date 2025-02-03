function submitFeedback() {
    const username = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const job = document.getElementById('job').value.trim();
    const designation = document.getElementById('designation').value.trim();
    const productType = document.getElementById('productType').value.trim();
    const feedback = document.getElementById('feedbackText').value.trim();

    if (!username || !age || !email || !job || !designation || !productType || !feedback) {
        alert('Please fill in all fields before submitting.');
        return;
    }


    alert('Thank you for your valuable feedback!');

    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    document.getElementById('userInfo').style.display = 'block';
}

document.getElementById('submitBtn').addEventListener('click', submitFeedback);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
