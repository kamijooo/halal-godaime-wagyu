# Godaime Wagyu — multi-page site

## 構成

```
/
├── index.html            ← TOP(ブランド全体・全店共通)
├── oshiage.html          ← 押上スカイツリー店ページ
├── sidebar.css           ← 共通サイドバー用CSS
├── sidebar.js            ← サイドバー開閉 + iframe高さ受信
├── burger-image/         ← 共通画像(1-8.jpg)
│   ├── 1.jpg  バーガー
│   ├── 2.jpg  和牛丼
│   ├── 3.jpg  ステーキ
│   ├── 4.jpg  和牛バーガー(漢字焼印)
│   ├── 5.jpg  バーガー + 丼ペア(TOP No.01)
│   ├── 6.jpg  和牛ラーメン(Skytree exclusive)
│   ├── 7.jpg  ラーメン + 和牛重セット
│   └── 8.jpg  バーガー + ステーキセット
└── sections/             ← 各iframeセクション
    ├── common.css
    ├── resize.js
    ├── menu.html              TOP - Menu
    ├── story.html             TOP - Story
    ├── halal.html             TOP - Halal
    ├── exp.html               TOP - Experience
    ├── reviews.html           TOP - Reviews
    ├── oshiage-hero.html      押上 - FV
    ├── oshiage-menu.html      押上 - Menu (4本柱 + Set)
    ├── oshiage-access.html    押上 - Access(地図+アクセス)
    └── oshiage-reserve.html   押上 - Reserve(予約CTA)
```

## サイト構造

- **TOP** (`index.html`)
  - 左サイドバー: ロゴ + ナビ
  - メイン: Menu / Story / Halal / Experience / Reviews
- **押上スカイツリー店** (`oshiage.html`)
  - 左サイドバー: ロゴ + ナビ + 営業時間 / 電話 / 住所 / 予約ボタン
  - メイン: FV / Menu(4本柱) / Access / Reserve

サイドバー内の「Other locations」リンクは現在プレースホルダー(`alert` で「準備中」表示)です。他店舗ページを追加するときは `sections/oshiage-*.html` をテンプレートにできます。

## GitHubへの上げ方

1. **既存の `burger-image/` フォルダの中身を、このzipの軽量版に置き換える**(1-5.jpg は既存、6-8.jpg は新規追加)
2. **`LP仮案① (1).html` は削除**
3. **以下を新規アップロード:**
   - `index.html`
   - `oshiage.html`
   - `sidebar.css`
   - `sidebar.js`
   - `sections/` フォルダ
4. Commit → GitHub Pagesが反映される(数十秒待つ)

最終的なリポジトリの構造:

```
halal-wagyu-hamburger-skytree/
├── index.html
├── oshiage.html
├── sidebar.css
├── sidebar.js
├── burger-image/  (1.jpg〜8.jpg)
└── sections/      (全11ファイル)
```

5. ブラウザで開く:
   - TOP: `https://kamijooo.github.io/halal-wagyu-hamburger-skytree/`
   - 押上店: `https://kamijooo.github.io/halal-wagyu-hamburger-skytree/oshiage.html`

GBP の URL欄には押上店のURLを設定するのが理想です。

## サイズ

| | 元 | 今回 |
|---|---:|---:|
| HTML/CSS/JS | 2.16 MB | ~140 KB |
| 画像 | (Base64) | ~1.6 MB(8枚) |
| 合計 | 2.16 MB | ~1.7 MB |

## ローカル確認方法

```bash
cd godaime-lp
python3 -m http.server 8000
# http://localhost:8000/oshiage.html を開く
```

`index.html` をダブルクリックで直接開いても、ブラウザのセキュリティ制約で iframe が読み込めません。必ず HTTP サーバ経由(ローカルサーバ or GitHub Pages)で確認してください。

## 押上店ページの設計意図

GBP (Google Business Profile) から飛んできた人が「この店に来るかどうか」を1スクロール以内で判断できる構成:

1. **FV直下に確定情報**: 営業中バッジ / ハラル認証 / スカイツリーから5分 / 大きな予約ボタン / 電話 / 住所 / 地図リンク
2. **次にメニュー**: ラーメン主役カット + 3枚のディッシュカード + セット
3. **次にアクセス**: 地図 + 最寄駅一覧
4. **最後に予約**: 大きな赤いTableCheckボタン + 電話

サイドバーには常時「予約 →」のCTAが固定で見えているので、ページのどこからでも1クリックで予約画面に飛べます。

## 仮の部分(後で調整推奨)

- 価格(¥2,800 / ¥3,200 / ¥5,400 / ¥4,200)は仮。実際の価格に差し替えてください
- メニュー説明文も仮の英文。実際の食材・調理法に合わせて差し替えてください
- ハラル認証の機関名・取得時期は記載なし(必要であれば追加可能)
