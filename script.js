// function to handle form feedback
function handleNewsletterFormSubmission(formId, feedbackId, emailInputId) {
    document.getElementById(formId).addEventListener('submit', function(event) {
        event.preventDefault(); 
        var emailInputValue = document.getElementById(emailInputId).value;
        var feedbackElement = document.getElementById(feedbackId);

        if (emailInputValue.length > 0 && emailInputValue.includes('@')) {
            feedbackElement.style.display = 'block';
            feedbackElement.textContent = 'Thank you for subscribing!';
            feedbackElement.className = 'alert alert-success'; // Bootstrap success alert class
        } else {
            feedbackElement.style.display = 'block';
            feedbackElement.textContent = 'Please enter a valid email address.';
            feedbackElement.className = 'alert alert-danger'; // Bootstrap danger alert class
        }
    });
}

handleNewsletterFormSubmission('newsletterForm', 'formFeedback', 'emailInput');

// ContactForm
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');

    let error = false;

    // Reset validation feedback
    document.querySelectorAll('.form-control').forEach(input => {
        input.classList.remove('is-invalid');
    });

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('is-invalid');
        error = true;
    }

    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        emailInput.classList.add('is-invalid');
        error = true;
    }

    if (messageInput.value.trim() === '') {
        messageInput.classList.add('is-invalid');
        error = true;
    }

    if (!error) {
        // form submission feedback
        alert('Thank you for your message. We will get back to you as soon as possible.');

        // Reset form after successful validation and mock submission
        this.reset();
    }
});

function submitForm(formData) {
    fetch('/submit-form', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => alert('Message sent successfully!'))
    .catch(error => console.error('Error:', error));
}
document.querySelectorAll('.btn-info').forEach(button => {
    button.addEventListener('click', function () {
        setTimeout(() => {
            const collapse = document.getElementById(this.getAttribute('data-target').substring(1));
            if (collapse.classList.contains('show')) {
                collapse.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 300);
    });
});

//Document content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to parse query strings
    function getQueryStringValue(key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    // 'show' query string value
    var showId = getQueryStringValue("show");

    // display the relevant show details
    if(showId === "1") {
        // display details for the first show
        document.getElementById("details1").style.display = "block";
    } else if(showId === "2") {
        // display details for the second show
        document.getElementById("details2").style.display = "block";
    } 
});