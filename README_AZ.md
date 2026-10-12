# GameVerse — ilkin versiya

Bu layihə PC və Android brauzerləri üçün uyğun, quraşdırıla bilən (PWA) oyun kataloqu başlanğıcıdır.

## Hazırda nə var?
- Responsive dizayn
- Oyun axtarışı və janr filtrləri
- Yandex Games və Poki rəsmi ana səhifələrinə keçid
- PWA manifest və sadə offline shell cache
- Nümunə oyun kartları (real oyun deyil)

## İşə salmaq
Faylları hosting-ə yüklə və `index.html` faylını HTTPS domenindən aç. Service worker HTTPS və ya localhost tələb edir.

## Android tətbiqi
Bu ilkin versiya PWA kimi Android-də quraşdırıla bilər: Chrome-da saytı aç, brauzer menyusundan “Install app” / “Add to Home screen” seç. Əsl APK üçün sonradan Capacitor və ya Android WebView layihəsi qurmaq, tətbiq ikonları və imza əlavə etmək lazımdır.

## Vacib hüquqi/texniki qeyd
Yandex Games və Poki oyunlarının hamısını öz saytında iframe ilə göstərmək mümkün deyil; bəzi oyunlar bunu texniki və ya lisenziya səbəbilə bloklayır. Bu nümunədə təhlükəsiz şəkildə rəsmi kataloqlara keçid verilir. Konkret oyunları yerləşdirməzdən əvvəl həmin oyunun sahibi və platformanın şərtlərini yoxla. Bu layihə Yandex və ya Poki ilə rəsmi tərəfdaşlıq iddiası etmir.

## Sonrakı mərhələ
1. Real oyun siyahısı və icazəli URL-lər əlavə et.
2. Oyuna görə platforma və janr metadatası yarat.
3. İstəsən, Capacitor ilə Android APK layihəsinə çevir.
