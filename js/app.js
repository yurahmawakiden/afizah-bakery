// ---------- Elemen yang dipakai ----------
const menuEl = document.getElementById("menu");
const filterEl = document.getElementById("filter-produk");
const jumlahEl = document.getElementById("jumlah-produk");
const daftarEl = document.getElementById("daftar-produk");
const formKontak = document.getElementById("form-kontak");
const statusEl = document.getElementById("form-status");

// ---------- Data Statis ----------
const MENU = [
  { id: "beranda", label: "Beranda" },
  { id: "produk", label: "Produk" },
  { id: "kontak", label: "Kontak" },
];

// ---------- State ----------
let filterKategori = "semua";
let PRODUCTS = []; // Menampung data dari JSON

// ---------- Fungsi bantu ----------
function rupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function esc(teks) {
  return String(teks).replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c];
  });
}

// ---------- Menu ----------
function renderMenu() {
  menuEl.innerHTML = MENU.map(function (m) {
    return `<li><a href="#${m.id}">${esc(m.label)}</a></li>`;
  }).join("");
}

// ---------- Produk ----------
function kartuProduk(p) {
  return `
  <article class="card">
    <img src="${p.img}" alt="${esc(p.alt)}" style="width:100%; border-radius:8px;">
    <h3>${esc(p.nama)}</h3>
    <p class="meta">${esc(p.kategori)}</p>
    <p>${esc(p.deskripsi)}</p>
    <p class="price">${rupiah(p.harga)}</p>
  </article>
  `;
}

function renderProduk() {
  const daftar = filterKategori === "semua"
    ? PRODUCTS
    : PRODUCTS.filter(function (p) {
        return p.kategori === filterKategori;
      });
  jumlahEl.textContent = "Menampilkan " + daftar.length + " produk";
  daftarEl.innerHTML = daftar.map(kartuProduk).join("");
}

function renderFilter() {
  // Disamakan dengan kategori yang ada pada produk.json
  const kategori = ["semua", "kue kering"];
  filterEl.innerHTML = kategori.map(function (k) {
    const aktif = k === filterKategori ? "active" : "";
    return `<button class="filter ${aktif}" data-kategori="${k}">${k}</button>`;
  }).join("");
}

filterEl.addEventListener("click", function (e) {
  const tombol = e.target.closest("[data-kategori]");
  if (!tombol) return;
  filterKategori = tombol.dataset.kategori;
  renderFilter();
  renderProduk();
});

// ---------- Formulir kontak ----------
formKontak.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = formKontak.nama.value.trim();
  const pesan = formKontak.pesan.value.trim();
  
  if (nama === "" || pesan === "") {
    statusEl.textContent = "Nama dan pesan wajib diisi.";
    return;
  }
  
  statusEl.textContent = `Terima kasih, ${nama}! Pesan Anda sudah kami terima.`;
  formKontak.reset();
});

// ---------- Inisialisasi ----------
document.getElementById("tahun").textContent = new Date().getFullYear();
renderMenu();
renderFilter();

// ---------- Memanggil Data JSON ----------
fetch('produk_2.json') // Pastikan nama ini sama persis dengan nama file JSON Anda
  .then(response => {
    if (!response.ok) throw new Error("Gagal memuat jaringan");
    return response.json();
  })
  .then(data => {
    PRODUCTS = data.produk; // Ambil properti 'produk' dari object utama JSON
    renderProduk(); // Render produk setelah data JSON berhasil diambil
  })
  .catch(error => {
    console.error("Gagal mengambil data produk:", error);
    daftarEl.innerHTML = "<p>Gagal memuat produk. Pastikan Anda menjalankan aplikasi via Local Server.</p>";
  });