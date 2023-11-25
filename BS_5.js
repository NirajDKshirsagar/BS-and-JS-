document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const handleFormSubmit = (event) => {
        const form = event.target;

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    };

    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit, false);
    });
});
