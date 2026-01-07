# Bhara Sound System - Website Statis

Website statis profesional untuk layanan sewa sound system Bhara Sound System.

## 🎯 Fitur

- ✅ Website statis murni (HTML, CSS, JavaScript vanilla)
- ✅ Desain responsif mobile-first
- ✅ Form booking terintegrasi WhatsApp (6281226509675)
- ✅ Navigasi hamburger menu untuk mobile
- ✅ Tombol WhatsApp floating di semua halaman
- ✅ Animasi smooth scroll
- ✅ Warna tema: Hitam + Emas (gold)

## 📁 Struktur File

```
bhara-sound/
├── index.html          # Halaman beranda
├── portfolio.html      # Halaman portofolio
├── booking.html        # Halaman booking
├── contact.html        # Halaman kontak
├── styles.css          # File styling
├── script.js           # JavaScript untuk interaksi
└── README.md           # File ini
```

## 🚀 Deploy ke GitHub Pages

### Cara 1: Upload Manual

1. **Buat repository baru di GitHub**
   - Nama: `bharasound` (atau nama lain)
   - Public repository

2. **Upload semua file**
   - Upload semua file di folder `bhara-sound/` ke root repository
   - Atau buat folder `docs/` dan upload di sana

3. **Aktifkan GitHub Pages**
   - Settings → Pages
   - Source: pilih branch `main`
   - Folder: pilih `/root` atau `/docs`
   - Save

4. **Akses website**
   - URL: `https://username.github.io/bharasound/`

### Cara 2: Via Git Command Line

```bash
# 1. Masuk ke folder bhara-sound
cd bhara-sound

# 2. Inisialisasi git
git init

# 3. Add semua file
git add .

# 4. Commit
git commit -m "Initial commit - Bhara Sound System website"

# 5. Tambahkan remote repository
git remote add origin https://github.com/username/bharasound.git

# 6. Push ke GitHub
git branch -M main
git push -u origin main

# 7. Aktifkan GitHub Pages di Settings → Pages
```

## 🔧 Kustomisasi

### Mengubah Nomor WhatsApp

Cari dan ganti nomor `6281226509675` di:
- `index.html` (tombol floating)
- `portfolio.html` (tombol floating)
- `booking.html` (tombol floating + form)
- `contact.html` (tombol floating + info kontak)
- `script.js` (fungsi booking & contact form)

### Mengubah Warna

Edit di `styles.css` bagian `:root`:
```css
:root {
    --color-primary: #1a1a1a;        /* Hitam */
    --color-secondary: #d4af37;      /* Emas */
    --color-accent: #b8941f;         /* Emas gelap */
}
```

## 📱 Fitur WhatsApp Integration

### Booking Form
Ketika user submit form booking:
- Data otomatis diformat ke pesan WhatsApp
- Redirect ke WhatsApp dengan pesan pre-filled
- Format: Nama, Tanggal, Lokasi, Jenis Event, Pesan

### Contact Form
Similar dengan booking form, redirect ke WhatsApp

### Floating Button
Tombol WhatsApp di kanan bawah untuk kontak cepat

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📊 Performance

- Lightweight: Total size < 50KB
- Fast loading: No external dependencies
- SEO friendly: Semantic HTML

## 📄 Lisensi

© 2025 Bhara Sound System. All rights reserved.

## 📞 Kontak

- WhatsApp: 0812-2650-9675
- Instagram: @bharasound
- Email: bharasound@example.com
