# Bil Bakalım: Ülke ve Şehir Bilmece Oyunu

Bu proje, ülkeler ve şehirler hakkında bilgi edinmeyi eğlenceli hale getiren bir web oyunudur. Kullanıcılar iki farklı modda oynayabilir:
- **Bayrak Bilmece:** Rastgele bir ülke bayrağı gösterilir, kullanıcı ülke adını tahmin eder.
- **Şehirden Ülke Bilmece:** Rastgele bir popüler şehir adı verilir, kullanıcı o şehrin hangi ülkeye ait olduğunu bulmaya çalışır.

## Özellikler
- Modern ve kullanıcı dostu arayüz
- Yanlış cevap hakkı seçimi
- Kıta filtresi (bayrak modunda)
- Ses efektleri ve arka plan müziği
- İpucu sistemi
- Şehir ve ülke isimlerinde Türkçe/İngilizce ve alternatif isim desteği
- Harf hatalarına toleranslı cevap kontrolü

## Kullanım
1. Proje dosyalarını bilgisayarınıza indirin veya klonlayın.
2. Klasörde terminal açıp aşağıdaki komutla yerel sunucu başlatın:
   ```sh
   python -m http.server 8000
   ```
3. Tarayıcıda `http://localhost:8000` adresine gidin.
4. Oyunun keyfini çıkarın!

## Dosya Yapısı
- `index.html` : Ana HTML dosyası
- `script.js` : Oyun mantığı ve etkileşimler
- `style.css` : Tasarım ve stil dosyası
- `cities.json` : Şehir-ülke verisi
- `music1.mp3`, `music2.mp3`, `music3.mp3` : Arka plan müzikleri
- `correct.mp3`, `wrong.mp3` : Ses efektleri

## Katkı ve Lisans
Bu proje eğitim amaçlıdır. Geliştirmek veya katkı sağlamak isteyenler pull request gönderebilir.

---

