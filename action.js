$(function () {
    $('.body-area-row').click(function () {

        // クリックされた対象の文字エリアを取得
        var target = $(this).next('.body-area-text');

        // 対象エリア以外を閉じる
        $('.body-area-text').not(target).slideUp();

        // 対象エリアを開閉する
        target.slideToggle();
    });
});