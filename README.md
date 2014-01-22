BaduduJS
=======

Ide penamaan berkas kode ini datang dari Deon Sukma - [@deon](http://twitter.com/deon), sebagai salah satu bentuk kenangan bagi salah satu pahlawan bahasa bangsa kita, JS Badudu.

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


Plugins Wordpress
-----------------
Bagi Anda pengguna Wordpress, saya sudah bikinkan pluginsnya. Silakan tempatkan folder `wp-badudujs` di folder wp-content/plugins/ lalu activate module `Badudu JS`. Selamat mencoba!


To Do:
-----
- merapikan lembar gaya (_stylesheet_ maksudnya), termasuk mengatur posisi kotak melayang (_overlay box_)
- mungkin menambahkan pita untuk memberitahu pengunjung mengenai aturan klik ganda (_double click_)
