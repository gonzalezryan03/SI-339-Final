function scrollToContent() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
function scrollToPhotos() {
    document.querySelector('.photo-showcase').scrollIntoView({ behavior: 'smooth' });
}
