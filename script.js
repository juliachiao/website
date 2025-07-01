document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = '感謝您的留言！我們已收到您的訊息。';
    this.reset();
}); 