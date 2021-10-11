document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');

    for (link of links) {
        link.addEventListener('click', function() {
            window.open(this.getAttribute('to'), '_blank');
        });
    }
});