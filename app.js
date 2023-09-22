const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('clicked');
});