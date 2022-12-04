jQuery(function ($) {		
    $('.conA').bgSwitcher({
        images: ['/image1-2.jpg', '/image1-1.jpg', '/image1-1.jpg'], // 切り替える背景画像を指定
        interval: 6000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 600, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });			
});