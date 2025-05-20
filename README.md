# Implementasi SEO dan Pengukuran Kinerja Website  
**Portfolio Khoirul Rijal Wicaksono**  
**NIM: 122140234**

````markdown


---

## 1. Implementasi SEO

### 1.1 Analisis Elemen SEO Pada Website

**Meta Tags**  
Website portfolio Khoirul Rijal Wicaksono telah mengimplementasikan beberapa elemen SEO penting pada bagian `<head>` dokumen HTML:  
- **Meta Description:**  
  ```html
  <meta name="description" content="Portfolio Khoirul Rijal Wicaksono, Network Engineer profesional dengan pengalaman dan keahlian di bidang jaringan komputer. Jelajahi proyek dan keahlian saya dalam manajemen dan pengelolaan jaringan!"/>
````

* **Meta Keywords:**

  ```html
  <meta name="keywords" content="Network Engineer, portfolio jaringan, Khoirul Rijal Wicaksono, administrasi jaringan, manajemen jaringan, IT network" />
  ```
* **Meta Author:**

  ```html
  <meta name="author" content="Khoirul Rijal Wicaksono" />
  ```

---

**Title Tag**

```html
<title>Khoirul Rijal Wicaksono | Network Engineer Profesional</title>
```

* Title ini sudah optimal karena:

  * Mencantumkan nama lengkap (Khoirul Rijal Wicaksono)
  * Menyertakan profesi utama (Network Engineer Profesional)
  * Panjang title (58 karakter) sesuai rentang ideal 50-60 karakter

---

**Heading Structure**
Website menggunakan struktur heading yang baik dengan hierarki jelas:

```html
<h1>Khoirul Rijal Wicaksono</h1>
<h2>Selamat Datang di Portofolio Saya</h2>
<h2>Proyek Terbaru</h2>
<h3>Implementasi Jaringan Perusahaan</h3>
```

---

**URL Structure**
Website menggunakan struktur URL sederhana dengan navigasi anchor yang jelas, misal:

```
#home  
#projects  
#contact
```

---

**Alt Text untuk Gambar**
Semua gambar dilengkapi atribut `alt` yang deskriptif:

```html
<img src="..." alt="Foto Khoirul Rijal Wicaksono, Network Engineer profesional" width="300" height="200" />
<img src="..." alt="Pengaturan jaringan perusahaan oleh Khoirul Rijal Wicaksono" width="300" height="200" />
```

---

### 1.2 Implementasi Microformat (Schema.org)

Website mengimplementasikan microformat Schema.org dalam format JSON-LD seperti berikut:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khoirul Rijal Wicaksono",
  "jobTitle": "Network Engineer",
  "telephone": "+62 812-3456-7890",
  "email": "khoirul@example.com",
  "url": "https://khoirulrijal-portfolio.com",
  "image": "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  "description": "Network Engineer profesional dengan keahlian dalam pengelolaan jaringan, troubleshooting, dan optimasi solusi IT.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://www.linkedin.com/in/khoirulrijal",
    "https://www.instagram.com/khoirulrijal.network"
  ]
}
```

Implementasi ini mendukung SEO karena:

* Menggunakan tipe `"Person"` tepat untuk portfolio personal
* Menyediakan informasi kontak lengkap
* Menghubungkan profil sosial media yang memperkuat otentisitas
* Memberikan deskripsi pekerjaan yang jelas
* Menyertakan lokasi geografis

---

## 2. Analisis Pengukuran Kinerja

### 2.1 Metrik Kinerja yang Diimplementasikan

Website mengimplementasikan 5 metrik kinerja utama menggunakan JavaScript (file `performance.js`):

```js
// Fungsi pencatat metrik performa
function logPerformance(metric, value) {
  console.log(`${metric}: ${value.toFixed(2)}ms`);
}

// 1. Page Load Time
window.addEventListener('load', () => {
  const loadTime = performance.now();
  logPerformance("Page Load Time", loadTime);
});

// 2. First Contentful Paint (FCP)
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
    logPerformance("First Contentful Paint (FCP)", entry.startTime);
  }
}).observe({ type: 'paint', buffered: true });

// 3. Time to Interactive (TTI)
let tti = 0;
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name === 'first-contentful-paint') {
      tti = entry.startTime;
    }
    if (entry.entryType === 'longtask') {
      tti += entry.duration;
    }
  }
  logPerformance("Time to Interactive (TTI)", tti);
});
observer.observe({ entryTypes: ['paint', 'longtask'] });

// 4. Total Blocking Time (TBT)
let tbt = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntriesByType('longtask')) {
    if (entry.duration > 50) {
      tbt += entry.duration - 50;
    }
  }
  logPerformance("Total Blocking Time (TBT)", tbt);
}).observe({ entryTypes: ['longtask'] });

// 5. Cumulative Layout Shift (CLS)
let cls = 0;
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      cls += entry.value;
    }
  }
  logPerformance("Cumulative Layout Shift (CLS)", cls * 1000);
}).observe({ type: 'layout-shift', buffered: true });
```

---

### Analisis Metrik

1. **Page Load Time:** Mengukur total waktu halaman dimuat penuh menggunakan `performance.now()`.
2. **First Contentful Paint (FCP):** Waktu konten pertama muncul, diukur dengan `PerformanceObserver`.
3. **Time to Interactive (TTI):** Waktu hingga halaman benar-benar interaktif, dihitung dari FCP + durasi long tasks.
4. **Total Blocking Time (TBT):** Waktu thread utama diblokir lebih dari 50ms, mengganggu responsivitas.
5. **Cumulative Layout Shift (CLS):** Stabilitas tata letak dengan mengukur pergeseran visual yang tidak diharapkan.

---

### 2.2 Rekomendasi Peningkatan

**SEO Improvements:**

* Tambahkan tag canonical:

  ```html
  <link rel="canonical" href="https://khoirulrijal-portfolio.com" />
  ```
* Perluas struktur data Schema.org dengan tipe seperti `WebSite` dan `SearchAction`:

  ```json
  {
    "@type": "WebSite",
    "url": "https://khoirulrijal-portfolio.com",
    "name": "Portfolio Khoirul Rijal Wicaksono",
    "description": "...",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://khoirulrijal-portfolio.com/search?q={search_term}",
      "query-input": "required name=search_term"
    }
  }
  ```
* Tambahkan Open Graph dan Twitter Card tags untuk sharing sosial media:

  ```html
  <meta property="og:title" content="Khoirul Rijal Wicaksono | Network Engineer Profesional" />
  <meta property="og:description" content="Portfolio Network Engineer profesional dengan keahlian dalam pengelolaan jaringan." />
  <meta property="og:image" content="https://khoirulrijal-portfolio.com/images/profile.jpg" />
  <meta property="og:url" content="https://khoirulrijal-portfolio.com" />
  <meta name="twitter:card" content="summary_large_image" />
  ```

**Performance Improvements:**

* Terapkan lazy loading pada gambar:

  ```html
  <img src="image.jpg" alt="..." loading="lazy" width="300" height="200" />
  ```
* Gunakan preconnect untuk resource penting:

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
  ```
* Optimalkan pengukuran kinerja, misalnya dengan menggunakan `PerformanceNavigationTiming` API untuk TTI yang lebih akurat.

---


