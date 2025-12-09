# praktikum-web-mvc
IMPLEMENTASI ARSITEKTUR MVC UNTUK MANAJEMEN DATA ITEM
## 🎯 Tujuan Proyek

Proyek ini merupakan penyelesaian **Task 1 Praktikum Pengembangan Web** (Modul M12) yang fokus pada integrasi teknologi *backend* dan *frontend*.

Aplikasi yang dihasilkan adalah sistem **CRUD (Create, Read, Update, Delete)** dasar untuk mengelola inventaris **Data Item Baju-baju Wanita** dengan menerapkan arsitektur *Software* yang terstruktur.

---

## 📐 Arsitektur Proyek (MVC & ORM)

Kami menerapkan arsitektur **Model-View-Controller (MVC)** untuk memisahkan *business logic* dari tampilan data, serta menggunakan **Sequelize ORM** untuk interaksi dengan *database*.

### Pembagian Tugas Komponen:

| Komponen | File Utama | Peran |
| :--- | :--- | :--- |
| **Controller (C)** | `app.js` | Mengatur *routing*, menangani *request* HTTP, dan mengontrol alur data antara Model dan View. |
| **Model (M)** | `models/Item.js` | Menghubungkan dan mendefinisikan struktur tabel `items` di MySQL (ORM). |
| **View (V)** | `views/index.ejs` | Menampilkan data item secara dinamis menggunakan *template engine* EJS. |


model-view-controller-light-blue.png

### Struktur File Utama:

```bash
.
├── app.js             # ⬅️ Controller Utama & Routing
├── package.json       # ⬅️ Daftar Dependensi (Wajib untuk npm install)
├── models/
│   ├── connection.js  # Konfigurasi Koneksi Database
│   └── Item.js        # Definisi Model Item
└── views/
    └── index.ejs      # ⬅️ View Utama (Tampilan Tabel Data)
