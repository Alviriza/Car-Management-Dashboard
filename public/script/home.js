const details = document.querySelector(".sidebar-details");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const deleteButton = document.querySelector("#delcar");

open.addEventListener("click", function() {
    details.classList.toggle("show");
});

close.addEventListener("click", function() {
    details.classList.toggle("show");
});

