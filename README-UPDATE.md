# v4 更新パッケージ — 変更ファイルだけ

## 何をアップロードするか

このフォルダ内のファイルを **そのまま GitHub のリポジトリにアップロード** してください。
GitHubでは同名のファイルがあれば自動で上書きされます。

### アップロード手順

1. GitHubのリポジトリページ(`halal-godaime-wagyu`)を開く
2. 「**Add file** → **Upload files**」をクリック
3. このフォルダの中身を **すべて** ドラッグ&ドロップ
   - `index.html`
   - `oshiage.html`
   - `sections/` フォルダ(中の5ファイルが入っている)
4. 一番下までスクロールして「**Commit changes**」をクリック
5. Vercelが自動デプロイ(1〜2分)

### 上書きされるファイル(同名なので自動上書き)
- `index.html` — TOPページに新しい「Wherever your trip takes you.」マップセクションを追加
- `oshiage.html` — 押上店ページに20秒ダイアログ機能 + トラストセクション追加
- `sections/menu.html` — TOPメニュー、価格表示を削除
- `sections/oshiage-menu.html` — 押上メニュー、価格表示を削除
- `sections/oshiage-hero.html` — 押上FVに live activity ストリップ追加

### 新規に追加されるファイル
- `sections/map.html` — TOPの本州マップセクション
- `sections/oshiage-trust.html` — 押上店ストーリー & ハラル認証説得

### 既存ファイル(変更なし、何もしなくていい)
- `nav.css`, `nav.js`
- `stores.html`, `stores-tokyo.html`, `stores-kyoto.html`, `stores-osaka.html`
- `sections/` の他のファイル(story.html, halal.html, exp.html, reviews.html, common.css, resize.js, oshiage-access.html, oshiage-reserve.html)
- `burger-image/`(画像)
- `README.md`(古いやつ、消さなくてもOK)

### 削除すべきファイル
今回は **削除すべきファイルはありません**。

## 主な変更内容まとめ

1. **価格表示を全削除** — TOPメニュー / 押上メニュー
2. **TOPに本州マップセクション追加** — 「Wherever your trip takes you.」+ ターゲットピン
3. **押上店ページにトラストセクション追加** — 五代のストーリー + ハラル認証説得
4. **押上店FVに live activity 表示** — 「現在X人が見ています」(5-10ランダム) + 「今週X人が予約」
5. **20秒経過で予約/問い合わせダイアログ** — セッション中1回だけ表示
