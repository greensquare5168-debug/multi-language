/* 語言學習區（multi-language）左上角標題展開選單 → 切換 圖書館音樂研究所 / 知識補給站
   2026-11-11 孝瓏：語言學習區也要有展開切換 */
(function () {
  var brand = document.querySelector('.site-head .brand');
  if (!brand || brand.dataset.navReady) return;
  brand.dataset.navReady = '1';

  var wrap = document.createElement('span');
  wrap.style.cssText = 'position:relative;display:inline-flex;align-items:center;gap:2px';
  brand.parentNode.insertBefore(wrap, brand);
  wrap.appendChild(brand);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = '▾';
  btn.title = '切換分區';
  btn.setAttribute('aria-label', '切換分區');
  btn.style.cssText = 'border:0;background:transparent;cursor:pointer;font-size:12px;line-height:1;padding:0 2px;color:#64748b';
  wrap.appendChild(btn);

  var panel = document.createElement('div');
  panel.style.cssText = 'position:absolute;left:0;top:100%;margin-top:6px;min-width:190px;background:#fff;border:1px solid #e3ecf3;border-radius:10px;box-shadow:0 8px 22px rgba(16,24,40,.14);padding:6px;display:none;z-index:120';
  [
    ['圖書館音樂研究所', 'https://greensquare5168-debug.github.io/music-library/index.html'],
    ['知識補給站', 'https://greensquare5168-debug.github.io/music-library/%E7%9F%A5%E8%AD%98%E8%A3%9C%E7%B5%A6%E7%AB%99/index.html']
  ].forEach(function (it) {
    var a = document.createElement('a');
    a.href = it[1];
    a.textContent = it[0];
    a.style.cssText = 'display:block;padding:7px 10px;border-radius:7px;color:#1f2937;text-decoration:none;font-size:13px;white-space:nowrap';
    a.onmouseover = function () { a.style.background = '#f1f5f9'; };
    a.onmouseout = function () { a.style.background = 'transparent'; };
    panel.appendChild(a);
  });
  wrap.appendChild(panel);

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
  document.addEventListener('click', function () { panel.style.display = 'none'; });
})();
