# Big Fat Steak — Fase A

Landing page statis React + Vite untuk Big Fat Steak Balikpapan.

## Menjalankan lokal

```sh
npm install
npm run dev
```

Buka URL yang dicetak Vite (umumnya http://127.0.0.1:5173).
Pada PowerShell dengan execution policy terbatas, gunakan npm.cmd.

```sh
npm run build
npm run preview
```

Hasil produksi berada di dist/. Untuk XAMPP, sajikan isi dist melalui Apache; source JSX tidak dijalankan langsung oleh Apache. Base aset relatif mendukung pemasangan pada subfolder.

## Struktur

- index.html — metadata SEO dan entry point
- src/main.jsx — Brand, FoodImage (fallback), Reveal, Stars, External, dan bagian halaman
- src/style.css — Tailwind, styling responsif, reduced motion, fokus keyboard
- public/images/ — foto ilustrasi lokal dan fallback.svg
- public/favicon.svg — identitas ikon api
- vite.config.js — Vite, React, Tailwind, base relatif
- IMAGE-CREDITS.md — sumber dan lisensi gambar
- package-lock.json — versi dependency terkunci

## Cakupan

Navbar sticky, menu mobile (tutup melalui pilihan atau Escape), hero, tiga menu, tentang, ringkasan ulasan, lokasi ilustratif, footer. Semua tautan arah dan ulasan memakai tautan Google Maps yang disediakan. Kontak memakai tel:+6281297770189. Tidak ada akun Instagram rekaan atau harga menu individual.

Informasi restoran berasal dari brief pengguna, belum diverifikasi independen. Jam tutup dan jadwal harian tidak ditambahkan. Tahun copyright mengikuti tahun perangkat pengunjung.

## Verifikasi

npm install berhasil; audit instalasi: 0 vulnerabilities. Build produksi berhasil. Preview Vite berhasil disajikan melalui HTTP. Pemeriksaan browser visual, interaksi aktual, console, dan pengukuran overflow tidak dapat diselesaikan karena browser access host tidak tersedia. CSS menyediakan breakpoint mobile, tablet, desktop; lakukan QA visual akhir pada 360, 390, 430, 768, dan 1280 px sebelum publikasi.

## Data untuk finalisasi

- Foto asli makanan, tempat, dan logo resmi dengan izin penggunaan.
- Daftar menu, harga individual, dan ketersediaan terbaru.
- Jadwal buka/tutup harian yang dikonfirmasi.
- URL Instagram resmi jika tersedia.
- Konfirmasi alamat, kontak, rating, dan ulasan terbaru.
- Domain produksi untuk og:url dan URL absolut og:image (metadata gambar sekarang relatif untuk preview lokal).

Font menggunakan Google Fonts, dengan fallback sans-serif. Gambar sudah lokal dan memiliki fallback bila gagal dimuat.

## Pembaruan visual sesuai referensi pengguna

Enam PNG referensi disalin tanpa perubahan ke public/images/references/. Hero, logo, foto kategori, cerita, dan kontak mengambil area visual dari referensi melalui SVG viewBox, sehingga proporsi gambar terjaga tanpa menyunting raster sumber. Seluruh heading, deskripsi, harga, tombol, dan ulasan di halaman merupakan HTML interaktif, bukan poster halaman penuh.

Menu menampilkan enam panel kategori seperti referensi poster, dengan filter Semua Menu dan kategori individual. Galeri menggunakan ilustrasi dari referensi yang sama. Tidak ada rating individu atau kutipan ulasan rekaan yang ditambahkan. Klaim sejarah dan foto tempat pada poster yang belum dikonfirmasi tidak digunakan.

Validasi: build produksi berhasil. Pengujian DOM menggunakan jsdom berhasil untuk 28 entri menu, 6 filter kategori, format harga, lightbox open/next/previous/wrap/Escape, body scroll lock, dan pengembalian fokus. jsdom digunakan sementara melalui npm --no-save; dependency aplikasi tidak berubah. Script verifikasi lokal berada di .qa/. Pengukuran layout browser serta perbandingan screenshot mobile/desktop masih perlu dilakukan; hasil bukan jaminan pixel-perfect pada semua viewport.

Preview lokal: npm.cmd run dev. Tidak dilakukan deployment.
