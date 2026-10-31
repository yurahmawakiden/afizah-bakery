// data.js: semua data ada di sini, terpisah dari logika program.
// Ingin menambah menu atau produk? Cukup ubah berkas ini.
const SITE = {
nama: "Kopi Nusantara",
email: "halo@kopinusantara.test",
};
const MENU = [
{ id: "beranda", label: "Beranda" },
{ id: "produk", label: "Produk" },
{ id: "kontak", label: "Kontak" },
];
const PRODUCTS = [
        {
            "slug": "nastar",
            "nama": "Nastar Premium",
            "kategori": "kue kering",
            "harga": 85000,
            "deskripsi": "Kue kering lembut dengan isian nanas",
            "img": "img/nastar.jpg",
            "alt": "foto kue nanas",
            "stok": 20
        },
        {
            "slug": "kastengel",
            "nama": "Kastengel Premium",
            "kategori": "kue kering",
            "harga": 80000,
            "deskripsi": "Kue kering yang terbalut dengan keju yang renyah.",
            "img": "img/kastengel.jpg",
            "alt": "foto produk",
            "stok": 20
        },
        {
            "slug": "putri salju",
            "nama": "Puti Salju",
            "kategori": "kue kering",
            "harga": 90000,
            "deskripsi": "Kue kering dengan khar rasa gurih dan taburan gula manis.",
            "img": "img/putri-salju.jpeg",
            "alt": "foto produk",
            "stok": 20
        },
        {
            "slug": "thumb print",
            "nama": "Thumb Print",
            "kategori": "kue kering",
            "harga": 88000,
            "deskripsi": "Kue kering dengan taburan kacang almond dan coklat leleh di tengahnya.",
            "img": "img/thumb-print.jpg",
            "alt": "foto produk",
            "stok": 20
        }
    ];