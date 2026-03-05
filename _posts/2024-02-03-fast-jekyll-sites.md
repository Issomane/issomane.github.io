---
layout: post
title: "Building fast static sites with Jekyll in 2024"
description: "Jekyll still ships. Here's how to make it scream."
date: 2024-02-03 10:00:00 +0000
categories: [Engineering]
tags: [jekyll, performance, static-sites, web]
author: "Your Name"
read_time: 4
---

Jekyll isn't dead. It's just not the shiny new object anymore, which means the people still using it are using it intentionally.

Static sites have had a renaissance. The JAMstack era brought us Next.js, Astro, and Eleventy—all worthy. But for writers and small product sites, Jekyll's simplicity remains hard to beat.

## Why Jekyll in 2024

The entire stack is: Markdown → HTML. There's no hydration, no client bundle, no data fetching layer. The output is files. Files go to a CDN. Done.

When you optimize for that constraint rather than fight it, you end up with something remarkably fast.

## Performance checklist

A few optimizations that make a real difference:

```yaml
# _config.yml
sass:
  style: compressed

# Use jekyll-assets or manual minification
plugins:
  - jekyll-minifier
```

Combine that with font subsetting, proper cache headers on your CDN, and image lazy loading, and you're regularly hitting 98+ Lighthouse scores without exotic tooling.

The lesson: constraints breed performance. Static sites win on the web because they're the simplest possible thing that works.
