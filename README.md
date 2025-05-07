# Next.js アプリケーション

このプロジェクトは、Next.js 15.3.1を使用したモダンなWebアプリケーションです。

## 技術スタック

- **フレームワーク**: Next.js 15.3.1
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データベース**: Prisma
- **認証**: NextAuth.js
- **その他の主要サービス**:
  - Supabase
  - microCMS
  - Stripe

## 開発環境のセットアップ

1. リポジトリのクローン
```bash
git clone [リポジトリURL]
cd next-app
```

2. 依存関係のインストール
```bash
npm install
```

3. 環境変数の設定
`.env`ファイルを作成し、必要な環境変数を設定してください。

4. 開発サーバーの起動
```bash
npm run dev
```

## 利用可能なスクリプト

- `npm run dev`: 開発サーバーを起動（Turbopack使用）
- `npm run build`: プロダクションビルドを作成
- `npm run start`: プロダクションサーバーを起動
- `npm run lint`: コードのリントを実行

## プロジェクト構造

```
next-app/
├── app/          # アプリケーションのメインコード
├── prisma/       # データベーススキーマとマイグレーション
├── public/       # 静的ファイル
└── ...
```

## デプロイ

このプロジェクトはVercelにデプロイすることを想定しています。

## ライセンス

このプロジェクトはプライベートです。
