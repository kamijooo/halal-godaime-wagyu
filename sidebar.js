/* sidebar toggle + iframe height receiver */
(function(){
  // iframe からの高さ通知を受け取って各 iframe のheight を更新
  window.addEventListener('message', function(e){
    var d = e.data || {};
    if (d.type !== 'godaime-h' || !d.slug || typeof d.h !== 'number') return;
    var f = document.querySelector('iframe.lp-section[data-slug="' + d.slug + '"]');
    if (f) f.style.height = d.h + 'px';
  });

  // モバイル時のサイドバートグル
  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.querySelector('.menu-toggle');
    var sidebar = document.querySelector('.sidebar');
    if (!btn || !sidebar) return;
    btn.addEventListener('click', function(){
      sidebar.classList.toggle('open');
    });
    // ナビ内リンク or 予約ボタン押したら閉じる
    sidebar.querySelectorAll('nav a, .reserve-btn').forEach(function(a){
      a.addEventListener('click', function(){ sidebar.classList.remove('open'); });
    });
  });
})();
