const modalBackground = document.getElementById("popup__background");
const popupSec = document.getElementById("sec_popup");
const modal = document.querySelectorAll("[data-trigger]");
const modalImg = document.querySelectorAll("[data-set]");

// console.log(modalImg);

Array.prototype.forEach.call(modal, function (modalTrigger) {
  // querySelectorAllで取得したnodelistをそのままforeachだとieで動かないからArray.prototype.を使用
  // querySelectorAllで取得したnodelistをaddEventListenerでまわすためにforEachを使用し、htmlエレメントに変換し使用
  modalTrigger.addEventListener("click", function (e) {
    // クリックした要素から、data-triggerを取得
    //ここでクリックした値のdata-trigger="popup1"のpopup1を取得している
    //triggerではなく、currentTriggerにすることで値を取得出来た。

    
    // document.body.style.position = "fixed";
    // document.body.style.top = `-${window.scrollY}px`;



    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;


    const triggerId = e.currentTarget.dataset.trigger;
    //取得したpopup1をidにしている部分にクラスをis-show追加して表示させる
    popupSec.classList.add("is-show");
    modalBackground.classList.add("is-show");
    document.getElementById(triggerId).classList.add("is-show");
  });
});

// 画像単体の挙動

Array.prototype.forEach.call(modalImg, function (modalImgTrigger) {
  // querySelectorAllで取得したnodelistをそのままforeachだとieで動かないからArray.prototype.を使用
  // querySelectorAllで取得したnodelistをaddEventListenerでまわすためにforEachを使用し、htmlエレメントに変換し使用

  // function timer() {
  modalImgTrigger.addEventListener("click", function (e) {
    // クリックした要素から、data-triggerを取得
    //ここでクリックした値のdata-trigger="popup1"のpopup1を取得している
    //triggerではなく、currentTriggerにすることで値を取得出来た。

    const modalImgTrigger = e.currentTarget.dataset.set;
    //取得したpopup1をidにしている部分にクラスをis-show追加して表示させる

    // window.setTimeout( modalImgTrigger, 3000 );

    // 該当箇所を関数で囲って呼び出せばsetTimeout使えた
    function timer() {
      document.getElementById(modalImgTrigger).classList.add("is-show");
    }

    setTimeout(timer, 400);
  });
  // }
  // setTimeout(timer, 5000);
});

// モーダル本体には、別でイベントを付与したほうがいい
const popup = document.querySelectorAll(".popup");
const popupImg = document.querySelectorAll(".popup-img");

Array.prototype.forEach.call(popup, function (popupTarget) {
  // querySelectorAllで取得したnodelistをそのままforeachだとieで動かないからArray.prototype.を使用
  // querySelectorAllで取得したnodelistをaddEventListenerでまわすためにforEachを使用し、htmlエレメントに変換し使用
  popupTarget.addEventListener("click", function (e) {
    Array.prototype.forEach.call(popup, function (popupTarget) {
      popupTarget.classList.remove("is-show");
    });
    Array.prototype.forEach.call(popupImg, function (popupImgTarget) {
      popupImgTarget.classList.remove("is-show");
    });


    const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);



    // popup.classList.remove('is-show');
    modalBackground.classList.remove("is-show");
    popupSec.classList.remove("is-show");
  });
});


window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});