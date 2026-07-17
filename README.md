# Sweet Bite - Web E-Commerce Kue

Proyek UAS mata kuliah Web Fullstack. Sweet Bite adalah website toko kue online yang dibangun menggunakan Laravel dan React.

## Identitas

- **Nama:** Yunisa Hani Latifah
- **NIM:** 2305101119
- **Mata Kuliah:** Web Fullstack
- **Universitas:** PGRI Madiun (UNIPMA)

## Bahasa Pemrograman

- PHP (backend)
- JavaScript (frontend)
- SQL (database)

## Framework dan Library yang Digunakan

- Laravel 12 - framework PHP untuk backend
- React 18 - library JavaScript untuk tampilan
- Inertia.js - menghubungkan Laravel dengan React
- Laravel Sanctum - autentikasi untuk REST API
- Vite - build tool
- MySQL - database

## Fitur yang Dibangun

**User:**
- Register dan login
- Lihat produk di halaman beranda
- Tambah produk ke keranjang
- Checkout dan isi alamat pengiriman
- Lihat riwayat pesanan

**Admin:**
- Dashboard dengan statistik (total produk, pesanan, user, pendapatan)
- Kelola produk (tambah dan hapus)
- Kelola pesanan (update status)
- Login otomatis diarahkan ke dashboard admin

**REST API:**
- Register, login, logout
- CRUD produk, keranjang, dan pesanan
- Autentikasi menggunakan Bearer Token (Sanctum)

## Kelebihan

- Satu project untuk frontend dan backend (tidak perlu dua server terpisah)
- Tampilan cukup modern dengan warna sage green
- REST API lengkap dengan 13 endpoint
- Ada role admin dan user dengan redirect otomatis setelah login

## Kekurangan / Bug

- Belum ada fitur pembayaran online
- Belum ada fitur pencarian produk
- Tampilan belum responsive untuk layar HP
- Admin belum bisa edit produk, hanya bisa tambah dan hapus
- Belum ada notifikasi real-time untuk update status pesanan

## Cara Menjalankan

1. Clone repository ini
2. Jalankan `composer install`
3. Jalankan `npm install`
4. Copy `.env.example` ke `.env` lalu sesuaikan konfigurasi database
5. Jalankan `php artisan key:generate`
6. Jalankan `php artisan migrate`
7. Jalankan `php artisan db:seed`
8. Jalankan `php artisan serve` di terminal pertama
9. Jalankan `npm run dev` di terminal kedua
10. Buka browser ke `http://127.0.0.1:8000`

**Akun admin default:**
- Email: admin@sweetbite.com
- Password: admin123
