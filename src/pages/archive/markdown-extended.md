---
title: Markdown Extended Features
published: 2024-05-01
updated: 2025-05-13
description: 'Explore advanced Markdown features used across Edgework'
image: ''
tags: [Edgework, Example, Markdown, Astro]
category: 'Edgework Notes'
draft: false 
---

## GitHub Repository Cards
You can embed dynamic GitHub repository cards in your posts. These cards fetch repo info via the GitHub API and render it live.

::github{repo="elisakad/edgework-site"}

Create a GitHub repository card with the code:

```markdown
::github{repo="elisakad/edgework-site"}

## Admonitions

Following types of admonitions are supported: `note` `tip` `important` `warning` `caution`

:::note
Highlights information that readers should take note of, even when skimming.
:::

:::tip
Optional advice that helps readers apply or understand something better.
:::

:::important
Essential information needed for clarity or success.
:::

:::warning
Critical insight demanding immediate attention.
:::

:::caution
Flags potential negative outcomes or caveats.
:::

### Basic Syntax

```markdown
:::note
Highlights information that readers should take into account, even when skimming.
:::

:::tip
Optional advice that helps readers apply or understand something better.
:::
```

### Custom Titles

The title of the admonition can be customized.

:::note[Field Reflection]
This note captures a key insight from working at the intersection of Responsible AI and content moderation.
:::


```markdown
:::note[MY CUSTOM TITLE]
Note with customized title.
:::
```

### GitHub Syntax

> [!TIP]
> [The GitHub syntax](https://github.com/orgs/community/discussions/16925) is also supported.

```
> [!NOTE]
> You can also use GitHub syntax for notes.

> [!TIP]
> This is a GitHub-style tip box.
```