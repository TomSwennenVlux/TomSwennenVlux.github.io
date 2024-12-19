
    // Display the current year in the footer
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Initialize EmailJS
    emailjs.init("KlAFNGRyBPerN1Ss7");

    // Form submission handling
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            emailjs.sendForm("service_db2vbzr", "template_dcqzsxr", this)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Subscribed!',
                        text: 'You have successfully subscribed!',
                        confirmButtonText: 'OK'
                    });
                }, function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to subscribe. Please try again.',
                        confirmButtonText: 'OK'
                    });
                    console.error('EmailJS error:', error);
                });
        });
    } else {
        console.error("Newsletter form not found in the DOM.");
    }
;
