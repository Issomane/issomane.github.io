# Linear Jekyll Theme

A sleek, minimal Jekyll theme inspired by modern SaaS design (Linear, Vercel, Raycast). Dark by default, with shiny gradient borders, glowing elements, and a clean typographic system.

## Features

- ⚡ **Blazing fast** — zero JS dependencies, CSS-only animations
- 🎨 **Shiny design system** — gradient borders, glow effects, micro-interactions
- 🌙 **Dark by default** — deep dark palette with precise contrast
- 📝 **Beautiful prose** — DM Sans + DM Mono typographic pairing
- 🔍 **SEO ready** — jekyll-feed, sitemap, seo-tag pre-configured
- 📋 **Copy buttons** — auto-generated on all code blocks
- 🔧 **CSS custom properties** — change colors, spacing with one variable

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/linear-jekyll-theme
cd linear-jekyll-theme

# 2. Install gems
bundle install

# 3. Serve locally
bundle exec jekyll serve

# 4. Open http://localhost:4000
```

## Structure

```
linear-jekyll-theme/
├── _config.yml          # Site settings
├── _layouts/
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post layout
│   └── page.html        # Static page layout
├── _includes/
│   ├── header.html      # Navigation
│   └── footer.html      # Footer
├── _posts/              # Your blog posts (Markdown)
├── assets/
│   ├── css/main.css     # All styles + design tokens
│   └── js/main.js       # Minimal JS
├── index.html           # Homepage
├── blog.html            # Blog index
└── about.md             # About page
```

## Customization

All design tokens are CSS custom properties in `assets/css/main.css`:

```css
:root {
  --accent-violet: #7c3aed;   /* Primary accent */
  --accent-indigo: #4f46e5;   /* Secondary accent */
  --bg-base:       #080808;   /* Page background */
  --font-body:     'DM Sans'; /* Body font */
  --font-mono:     'DM Mono'; /* Code font */
}
```

## Writing Posts

Create files in `_posts/` following Jekyll's naming convention:

```markdown
---
layout: post
title: "Your Post Title"
description: "A short description for SEO and previews."
date: 2024-01-15 10:00:00 +0000
categories: [Design]
tags: [tag1, tag2]
author: "Your Name"
read_time: 5
---

Your content here...
```

## License

MIT License. Use freely, attribution appreciated but not required.
