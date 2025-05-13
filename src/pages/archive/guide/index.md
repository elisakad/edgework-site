---
title: Simple Guides for Edgework
published: 2025-03-01
description: "How to write and organize posts for the Edgework digital notebook."
image: "./cover.jpeg"
tags: ["Edgework", "Writing Guide", "Astro"]
category: Guides
draft: false
---

> Cover image source: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

This site is built with [Astro](https://astro.build/) and serves as a portfolio and field notebook for my project **Edgework**. For advanced configurations, consult the [Astro Docs](https://docs.astro.build/).

---

## 📝 Frontmatter for Edgework Posts

Each post starts with structured frontmatter that helps organize and display content correctly:

```yaml
---
title: Algorithmic Ghosts
published: 2025-03-15
description: A reflection on invisible labor in Responsible AI.
image: ./cover.jpg
tags: [Responsible AI, Ethics, Autoethnography]
category: Edgework Essays
draft: false
---
```

| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | The post title as it will appear on the site.                                                                                                                                                                                      |
| `published`   | The publication date (format: YYYY-MM-DD).                                                                                                                                                                   |
| `description` | Short summary of the post. Displayed on homepage and lists.                                                                                                                                                   |
| `image`       | Cover image path:<br/>• http(s):// = remote image<br/>• / = from public/ folder<br/>• Otherwise = relative to the markdown file |
| `tags`        | Keywords that describe the content. Used for filtering and discovery.                                                                                                                                                                                       |
| `category`    | Groups the post under a major theme (e.g. Edgework Essays, Reflections, Interviews).                                                                                                                                                                                   |
| `draft`        | 	If true, the post will not appear on the public site. Useful for drafts or future work.                                                                                                                                                    |

## Where to Place the Post Files



Your post files should be placed in `src/content/posts/` directory. You can also create sub-directories to better organize your posts and assets.

```
src/content/posts/
├── algorithmic-ghosts.md
└── ai-interview/
    ├── image.png
    └── index.md
```
