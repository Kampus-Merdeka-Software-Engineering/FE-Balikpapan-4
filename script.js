// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const formModal = document.querySelector("#form-modal");
const formModalButtons = document.querySelectorAll(".form-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

formModalButtons.forEach((btn) => {
  btn.onclick = (e) => {
    formModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik Tombol Close Detail Modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik Kirim Pesanan
function sentWhatsapp() {
  const phoneNumber = "+6282377546685";

  const name = document.querySelector(".name").value;
  const eMail = document.querySelector(".eMail").value;
  const title = document.querySelector(".title").value;
  const sum = document.querySelector(".sum").value;
  const address = document.querySelector(".address").value;
  const description = document.querySelector(".description").value;

  const url =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    `Nama : +${name}+%0a` +
    `E-mail : +${eMail}+%0a` +
    `Judul Buku : +${title}+%0a` +
    `Jumlah : +${sum}+%0a` +
    `Alamat : +${address}+%0a` +
    `Deskripsi : +${description}+%0a%0a`;

  window.open(url, "_blank").focus();
}

// Klik Tombol Close Kirim
document.querySelector("#form-modal .close-icon").onclick = (e) => {
  formModal.style.display = "none";
  e.preventDefault();
};

// Klik Kirim Pesan
function whatsApp() {
  const phoneNumber = "+6285342426949";

  const personName = document.querySelector(".person-name").value;
  const message = document.querySelector(".message").value;

  const url =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    `Nama : +${personName}+%0a` +
    `Pesan : +${message}+%0a%0a`;

  window.open(url, "_blank").focus();
}
