# ag-blog — 徐唐JoJo的博客

Astro 6 + AstroPaper v6，GitHub Pages 部署（push main 自动触发 `.github/workflows/deploy.yml`）。

## 关键约定

- **只用 pnpm**（npm install 会导致依赖版本漂移、`astro check` 类型报错）
- astro 必须 ≥6.4.5（6.4.2 的 i18n fallback rewrite 有空页面 bug）
- 自定义域名 https://xutangly.com（Cloudflare DNS，CNAME 平铺指向 joexu0627.github.io，public/CNAME 文件保持域名绑定）
- 删除/移动文章后若本地构建报 ImageNotFound：`rm -rf .astro node_modules/.astro node_modules/.vite dist`

## 双语架构

- 默认中文（`/`），英文版在 `/en/`
- 中文文章：`src/content/posts/<slug>.md`；英文译文：`src/content/posts-en/<slug>.md`（**同文件名配对**）
- 列表/归档/标签页按 `Astro.currentLocale` 自动选集合（`src/utils/getPostsByLocale.ts`）
- 英文文章详情/列表/标签/RSS 是真实路由（`src/pages/en/`）；其余 `/en/*` 页面靠 i18n fallback rewrite 自动生成
- UI 文案在 `src/i18n/lang/{zh-CN,en}.ts`（含站点名：中文"徐唐JoJo的博客"、英文 "JoJo's Blog"）
- 有正文的独立页面（如 about）需要建真实英文路由：参考 `src/pages/en/about.astro` + `src/content/pages/about-en.md`

## 发布文章工作流（重要）

用户**只写中文**。每当用户新增或修改 `src/content/posts/` 下的文章并要求发布时：

1. 将文章**翻译成英文**，写入 `src/content/posts-en/<同名文件>.md`
   - title、description、正文翻译成地道英文（不是直译）；tags 用英文；
   - `pubDatetime` 等时间字段与中文版保持一致；
   - 正文里的站内链接把 `/...` 改为 `/en/...`（如果对应英文页面存在）
2. 用户修改已有中文文章时，同步更新对应英文译文
3. `pnpm run build` 验证后 commit + push（中英文一起提交）

## 活动页

`src/data/events.ts`，新活动在数组开头加条目（date、mode、title 中英双语、可选 link）。
