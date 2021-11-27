(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_kNzY3JXKIc6CROhH8tuQT");
})();
window.onload = function() {
    document.getElementById('contact-for    m').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_g0e2qlc', 'template_vgykdtj', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}