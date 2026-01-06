const btnTambah = document.getElementById("btnTambah");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");
const btnBatal = document.getElementById("btnBatal");

btnTambah.addEventListener("click", () => {
    modal.style.display = "flex";
});

btnClose.addEventListener("click", () => {
    modal.style.display = "none";
});

btnBatal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
