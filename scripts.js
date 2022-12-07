//NAVBAR
// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}



//DRAGON MODAL
//Get Modal Element
const modal = document.getElementById('simpleModal');
//Get Open Modal Button
const modalBtn = document.getElementById('modalBtn');
//Get Close Button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
//Listen for Open Click
modalBtn.addEventListener('click', openModal);
//Listen for Close Click
closeBtn.addEventListener('click', closeModal);
//Listen for Outside Click
window.addEventListener('click', outsideClick);
//Function to Open Modal
function openModal() {
    modal.style.display = 'block';
}
//Function to Close Modal
function closeModal() {
    modal.style.display = 'none';
}
//Function to Close Modal if Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

