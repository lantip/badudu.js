BaduduJS
=======

Ide penamaan berkas kode ini datang dari Deon Sukma - [@deon](http://twitter.com/deon), sebagai salah satu bentuk kenangan bagi salah satu pahlawan bahasa bangsa kita, [JS Badudu](http://id.wikipedia.org/wiki/Jusuf_Sjarif_Badudu).

Fungsi utama berkas kode ini adalah untuk menambahkan fasilitas definisi untuk setiap kata yang ada di website. Pengunjung tinggal melakukan klik ganda (double click) di kata yang ingin dicari definisinya.

> **NOTE:** Berkas kode javascript murni, jadi semestinya berkas kode ini tidak akan bertabrakan dengan framework javascript yang lain.


Penggunaan
----------

tempatkan dua script ini di atas tag `</body>`

```
    <link rel="stylesheet" type="text/css" href="/path/css/badudujs.css" />
    <script src="/path/js/badudu.min.js" type="text/javascript"></script>
```

Demo
----
Silakan kunjungi [lantip.net](http://www.lantip.net) lalu klik dua kali (double click) kata di sana, kata apa saja.

Kredit
------
Data diambil dari [Kateglo](http://www.kateglo.com) asuhan Uda Ivan Lanin

Server API wrapper disediakan oleh [hky](http://twitter.com/ballysta) - @ardwort


Plugin Wordpress
-----------------
Bagi Anda pengguna Wordpress, saya sudah bikinkan plugin-nya. Silakan tempatkan folder `wp-badudujs` di folder wp-content/plugins/ lalu aktifkan modul `Badudu JS`. Selamat mencoba!

Plugins WP sudah mendapat persetujuan dari tim WordPress. Silakan instal melalui halaman admin wordpress Anda, cari plugin `Badudu JS`

atau Anda juga bisa mengunjungi halaman [Plugin Badudu JS di WP](http://wordpress.org/plugins/badudu-js/)


Browser Extensions
------------------
Tersedia Extension untuk Chrome di direktori `browser-extensions`. Silakan instal dengan langkah berikut:
- _ekstrak/unzip_ badudu-ext.zip
- buka `chrome://extensions` lalu centang atau aktifkan Developer Mode
- klik `Load unpacked extension...` maka akan terbuka jendela untuk memilih berkas.
- pilih folder hasil _ekstrak/unzip_ tadi (`badudu-ext`) lalu klik tombol `select`
- ekstension sudah terinstall dan aktif, sekarang di setiap web yang terbuka, Anda bisa melakukan klik ganda pada kata yang ingin Anda cari definisi KBBI-nya.



ChangeLog
---------
27 Januari 2014 - memperbaiki popup ganda dan gagal close di situs dengan ssl enabled.
24 Januari 2014 - memperbaiki script supaya tidak mencari definisi jika yang diklik dua kali bukan text.
