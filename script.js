
// navbar index.html
const menuToggle = document.querySelector(".menu-toggle");
const iconToggle = document.querySelector(".menu-toggle i");
const dropdown = document.querySelector(".dropdown");

if (menuToggle && iconToggle && dropdown){
    menuToggle.onclick = function () {
    dropdown.classList.toggle("active");
    const isOpen = dropdown.classList.contains("active");

    iconToggle.classList = isOpen ? "fa fa-times" : "fa fa-bars";
    };
}

// gallery.html
const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

if (imgModal && modalImg){
    function openimg(src) {
    imgModal.style.display = "flex";
    modalImg.src = src;
    }

    function closeimg() {
    imgModal.style.display = "none";
    }
}
