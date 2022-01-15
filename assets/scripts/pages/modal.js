const modalBackground = document.getElementById('popup__background');
const popupSec = document.getElementById('sec_popup');
const modal = document.querySelectorAll('[data-trigger]')


Array.prototype.forEach.call(modal, function(modalTrigger){
  // querySelectorAllで取得したnodelistをそのままforeachだとieで動かないからArray.prototype.を使用
  // querySelectorAllで取得したnodelistをaddEventListenerでまわすためにforEachを使用し、htmlエレメントに変換し使用
  modalTrigger.addEventListener('click', function(e){
    // クリックした要素から、data-triggerを取得
    //ここでクリックした値のdata-trigger="popup1"のpopup1を取得している
    //triggerではなく、currentTriggerにすることで値を取得出来た。
    const triggerId = e.currentTarget.dataset.trigger;
    //取得したpopup1をidにしている部分にクラスをis-show追加して表示させる
    popupSec.classList.add('is-show');
    modalBackground.classList.add('is-show');
    document.getElementById(triggerId).classList.add('is-show');
  });
});

// モーダル本体には、別でイベントを付与したほうがいい
const popup = document.querySelectorAll('.popup')

Array.prototype.forEach.call(popup, function(popupTarget){
  // querySelectorAllで取得したnodelistをそのままforeachだとieで動かないからArray.prototype.を使用
  // querySelectorAllで取得したnodelistをaddEventListenerでまわすためにforEachを使用し、htmlエレメントに変換し使用
  popupTarget.addEventListener('click', function(e){
    Array.prototype.forEach.call(popup, function(popupTarget){
      popupTarget.classList.remove('is-show');
    })
    // popup.classList.remove('is-show');
    modalBackground.classList.remove('is-show');
    popupSec.classList.remove('is-show');
  });
});