/* postMessage で親に高さ通知 — 各セクション共通 */
(function(){
  var SLUG = (document.documentElement.dataset.slug) || 'section';
  var last = 0;
  // body直下の各子要素の getBoundingClientRect().bottom の最大値を実コンテンツ高として使う。
  // body自体は親iframeの高さに引きずられるため、それでは正しい高さが得られない。
  function getH(){
    var max = 0;
    var children = document.body.children;
    for (var i = 0; i < children.length; i++){
      var el = children[i];
      // スクリプトやスタイルタグはスキップ
      var tag = el.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK' || tag === 'META') continue;
      var rect = el.getBoundingClientRect();
      // ページ全体としてのbottom = rect.bottom + 現在のscroll量
      var bottom = rect.bottom + (window.scrollY || window.pageYOffset || 0);
      if (bottom > max) max = bottom;
    }
    // フォールバック
    if (max < 50){
      max = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    }
    return max;
  }
  function report(){
    var h = Math.ceil(getH());
    if (h !== last && h > 50){
      last = h;
      try{ parent.postMessage({type:'godaime-h', h:h, slug:SLUG}, '*'); }catch(e){}
    }
  }
  window.addEventListener('DOMContentLoaded', report);
  window.addEventListener('load', report);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(report);
  var polls = 0;
  var id = setInterval(function(){ report(); polls++; if (polls >= 16) clearInterval(id); }, 500);
  window.addEventListener('resize', report);
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(report).observe(document.body);
  if (typeof MutationObserver !== 'undefined') new MutationObserver(report).observe(document.body, {subtree:true, childList:true, attributes:true});
})();
