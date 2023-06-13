const publicKey = 'G0cW_ZSCb5m5eT4LC';

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    emailjs.init(publicKey);

    const countrySelect = document.getElementById('country').value;
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    const nameInput = document.getElementById('name').value;
    const phoneNumber = countrySelect + phoneInput;
    const templateParams = {
        from_name: 'Kiril Kirichenko',
        to_name: 'RGB web-syudio',
        user_email: emailInput,
        user_number: phoneNumber,
        user_name: nameInput,
    };

    emailjs.send('contact_service', 'contact_form', templateParams, publicKey)
        .then(() => {
            alert('Сongratulations, the form was sent successfully!');
            document.getElementById('email').value = '';
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('country').value = '';
        }, function (error) {
            alert('Something went wrong. Please try again later.');
            console.error('EmailJS Error:', error);
        });
});