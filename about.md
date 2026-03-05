---
layout: page
title: About
description: The story behind the Linear Jekyll Theme.
permalink: /about/
---

## What is this?

**Linear Theme** is an open-source Jekyll theme built for people who care about the craft of publishing on the web. It takes inspiration from modern SaaS design—particularly the kind popularized by tools like Linear, Vercel, and Raycast—and brings it to the world of static sites.

## Design philosophy

The theme is built around a few core beliefs:

**Dark by default.** Not as a trend, but as a genuine design choice. Dark backgrounds with precise contrast ratios reduce eye fatigue during long reading sessions and let accent colors pop with authority.

**Borders that communicate.** The shiny gradient borders aren't decoration—they're a system. They create depth and hierarchy without adding visual noise. On hover, they brighten. On focus, they glow.

**Typography first.** Content is why anyone is here. The type system is built for reading: generous line height, restrained measure, and a font pairing (DM Sans + DM Mono) chosen for long-form legibility.

## Technical details

Built on Jekyll 4.x with:

- **Rouge** for syntax highlighting with a custom dark theme
- **DM Sans & DM Mono** via Google Fonts
- **CSS custom properties** for easy theming
- **Zero JavaScript dependencies** — the only JS is a tiny scroll handler
- **jekyll-feed**, **jekyll-sitemap**, and **jekyll-seo-tag** pre-configured

## How to customize

All design tokens live in CSS custom properties at the top of `assets/css/main.css`. To change the accent color across the entire site, update one variable:

```css
:root {
  --accent-violet: #7c3aed; /* Change this */
}
```

To change fonts, swap the Google Fonts import and the `--font-body` and `--font-mono` variables.

---

Questions or contributions? Open an issue or PR on GitHub.
