const menuToggle = document.querySelector('.menu-toggle');
const iconToggle = document.querySelector('.menu-toggle i');
const dropdown = document.querySelector('.dropdown')

menuToggle.onclick = function(){
    dropdown.classList.toggle('active');
    const isOpen = dropdown.classList.contains('active');

    iconToggle.classList = isOpen ? 'fa fa-times' : 'fa fa-bars';
}
