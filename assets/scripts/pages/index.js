'use-strict';

const slider = function(){
    // Next(Prev)ボタンの取得
    const next = document.querySelector(".next-inner");
    const prev = document.querySelector(".prev-inner");

    // liタグのwidthを取得
    const sliderwidth = document.querySelector(".sliderlist__item");
    let width = sliderwidth.clientWidth;

    // slider(ul要素、li要素一覧)の取得
    const sliderlist = document.querySelector(".sliderlist");
    const sliderlist_item = document.querySelectorAll(".sliderlist__item")

    // カウンターの設定
    let counter = 0;

    // イベントリスナー (next)
    next.addEventListener("click", function(){
        setTimeout(function(click){
        if(counter == sliderlist_item.length - 1) return; //ボタン連打対策
        prev.style.display = "block";
        sliderlist.style.transition = ".3s";
        counter ++;
        sliderlist.style.transform = "translateX("+ (- width * counter) + "px)";
        

        sliderlist.addEventListener("transitionend", function(){
            if(counter == sliderlist_item.length - 5){
                sliderlist.style.transition = ".5s";
                next.style.display = "none";
            }
        })
    }, 400);
    });

    // イベントリスナー (prev)
    prev.addEventListener("click", function(){
        if(counter == sliderlist_item.length - sliderlist_item.length) return; //ボタン連打対策
        next.style.display = "block";
        sliderlist.style.transition = ".3s";
        counter --;
        sliderlist.style.transform = "translateX("+ (- width * counter) + "px)";

        sliderlist.addEventListener("transitionend", function(){
            if(counter == sliderlist_item.length - sliderlist_item.length){
                sliderlist.style.transition = "none";
                prev.style.display = "none";
            }
        })
    });
};

slider();

ScrollReveal().reveal('.content', { 
    duration: 800, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false  // 何回もアニメーション表示するか
});