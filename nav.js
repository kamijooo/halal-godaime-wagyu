/* topnav burger + dropdown + iframe height receiver */
(function(){
  // iframe からの高さ通知を受け取る
  window.addEventListener('message', function(e){
    var d = e.data || {};
    if (d.type !== 'godaime-h' || !d.slug || typeof d.h !== 'number') return;
    var f = document.querySelector('iframe.lp-section[data-slug="' + d.slug + '"]');
    if (f) f.style.height = d.h + 'px';
  });

  document.addEventListener('DOMContentLoaded', function(){
    var burger = document.querySelector('.burger');
    var dropdown = document.querySelector('.dropdown');
    var backdrop = document.querySelector('.dropdown-backdrop');
    if (!burger || !dropdown) return;

    function close(){
      burger.classList.remove('open');
      dropdown.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
    }
    function open(){
      burger.classList.add('open');
      dropdown.classList.add('open');
      if (backdrop) backdrop.classList.add('open');
      burger.setAttribute('aria-expanded','true');
    }
    burger.addEventListener('click', function(){
      if (burger.classList.contains('open')) close();
      else open();
    });
    if (backdrop) backdrop.addEventListener('click', close);
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') close();
    });
    // ナビゲーションリンクをクリックしたら閉じる(同一ページ内アンカー用)
    dropdown.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ close(); });
    });
  });
})();
