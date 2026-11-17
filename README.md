# Big Fat Steak — Fase A

Landing page statis React + Vite untuk Big Fat Steak Balikpapan.

## Menjalankan lokal

```sh
npm install
npm run dev
```

Buka URL yang dicetak Vite (umumnya http://127.0.0.1:5173/).
Pada PowerShell dengan execution policy terbatas, gunakan npm.cmd.

```sh
npm run build
npm run preview
```

Hasil produksi berada di dist/. Untuk XAMPP, sajikan isi dist melalui Apache; source JSX tidak dijalankan langsung oleh Apache. Base aset mengikuti VITE_DEPLOY_TARGET: github memakai /big-fat-steak/, cloudflare memakai /.

## Struktur

- index.html — metadata SEO dan entry point
- src/main.jsx — Brand, FoodImage (fallback), Reveal, Stars, External, dan bagian halaman
- src/style.css — Tailwind, styling responsif, reduced motion, fokus keyboard
- public/images/ — foto ilustrasi lokal dan fallback.svg
- public/favicon.svg — identitas ikon api
- vite.config.js — Vite, React, Tailwind, base GitHub Pages
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

## GitHub Pages

Workflow: .github/workflows/deploy.yml. Push ke main atau jalankan workflow_dispatch untuk membangun dengan Node.js 24 LTS, npm ci, dan npm run build, lalu menerbitkan dist menggunakan Actions resmi GitHub Pages. Plugin Vite dan desain aplikasi tetap sama.

Pengaturan satu kali di repository: Settings → Pages → Build and deployment → Source → GitHub Actions. Jika belum diaktifkan saat push pertama, jalankan ulang workflow melalui tab Actions setelah mengubah pengaturan tersebut.

URL publik yang dituju: https://samatech-01.github.io/big-fat-steak/

Untuk lokal tanpa environment tambahan, jalankan npm run dev dan buka http://127.0.0.1:5173/. Untuk hasil produksi root, npm run build:cloudflare kemudian npm run preview dan buka http://127.0.0.1:4173/. Seluruh URL gambar referensi menggunakan import.meta.env.BASE_URL. Favicon dan metadata gambar memakai substitusi %BASE_URL% dari Vite.

## Dua target deployment: GitHub Pages dan Cloudflare Workers

Vite membaca VITE_DEPLOY_TARGET dari environment proses atau file .env sesuai mode melalui loadEnv. Nilai yang diterima: github dan cloudflare; nilai lain membuat build gagal agar salah konfigurasi terlihat. Default adalah cloudflare (base /), termasuk localhost. GitHub Actions secara eksplisit menetapkan VITE_DEPLOY_TARGET=github pada langkah build.

Perintah lintas platform (PowerShell dapat memakai npm.cmd):

- npm run build:github → dist dengan base /big-fat-steak/.
- npm run build:cloudflare → dist dengan base /.
- npm run build → mengikuti VITE_DEPLOY_TARGET, default /.

Kedua target menulis ke dist yang sama. Bangun target yang tepat sebelum deploy. scripts/build-target.mjs menetapkan environment child process tanpa paket tambahan. Komponen, desain, konten, dan animasi tidak diubah.

### Pengaturan Cloudflare Workers Builds

- Root directory: root repository (folder berisi package.json dan wrangler.json).
- Production branch: main.
- Build command: npm run build:cloudflare.
- Deploy command: npx wrangler deploy.
- Build environment variable: VITE_DEPLOY_TARGET=cloudflare (bukan hanya runtime variable Worker).
- Static assets: ./dist, sudah ditetapkan dalam wrangler.json.
- Worker name pada dashboard harus sama dengan name di wrangler.json, yaitu big-fat-steak. Jika Worker yang sudah ada memakai nama berbeda, sesuaikan name atau gunakan --name NAMA_WORKER_YANG_SUDAH_ADA pada deploy command.

wrangler.json juga menetapkan build.command=npm run build:cloudflare, sehingga deploy langsung melalui Wrangler selalu membangun aset untuk root meskipun dist sebelumnya berisi hasil GitHub Pages. Build dashboard dan custom build Wrangler dapat berjalan dua kali; aman, namun jika ingin menghindarinya gunakan npx wrangler deploy --no-build setelah build dashboard berhasil.

Setelah push, pastikan pengaturan di atas berlaku lalu redeploy Worker. Konfigurasi dashboard dan website Cloudflare live belum diverifikasi dari lingkungan ini karena URL Worker dan sesi akun tidak tersedia.

### Temuan white screen

Konfigurasi lama mengunci base=/big-fat-steak/ untuk semua build. Jika dist itu disajikan oleh Worker pada root /, HTML menunjuk ke /big-fat-steak/assets/... sementara berkas berada pada /assets/.... Browser dapat menerima 404 atau fallback HTML ketika meminta JavaScript; aplikasi React gagal dijalankan. Ini merupakan penyebab yang ditemukan di source, bukan hasil pengamatan console pada deployment live.

Referensi SVG menggunakan import.meta.env.BASE_URL; favicon dan og:image menggunakan %BASE_URL%; entry JavaScript dan CSS diproses oleh Vite. Semua mengikuti target build. Navigasi halaman menggunakan anchor # dan tidak memerlukan base router.

Validasi kedua target mencakup build produksi, HTML tanpa placeholder tersisa, prefix bundle, HTTP 200 dengan MIME yang sesuai untuk JavaScript/CSS/favicon dan enam gambar referensi, serta localhost root. Pemeriksaan visual live tetap diperlukan setelah redeploy.

Wrangler CLI 4.163.0: deploy --dry-run berhasil, custom build memakai target cloudflare dan mendeteksi 25 berkas static assets di dist. Dry-run tidak menerbitkan website.
