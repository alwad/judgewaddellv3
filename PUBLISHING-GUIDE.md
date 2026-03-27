# judgewaddell.org — Publishing Guide
*How to update the site with no coding required*

---

## The Big Picture

The site lives on GitHub. Every time you save (called "committing") a file there,
the site rebuilds automatically within about 60 seconds. You never need to touch
code, install anything, or use a terminal. Everything happens in your browser at
**github.com**.

---

## 1. ADD A NEW SCHOLAR (do this every year)

1. Go to your repository on github.com
2. Click into the `_scholars/` folder
3. Click **Add file → Create new file**
4. Name the file: `firstname-lastname.md`  
   Example: `jane-smith.md`
5. Paste this template and fill in the details:

```
---
name: Jane Smith
year: 2027
excerpt: "One sentence summary quote from a nominator."
photo: /assets/img/scholars/jane-smith.jpg
---

Jane Smith is the 2027 recipient of the Judge Waddell Endowed Scholarship.

[Write 2–3 paragraphs here using quotes from nominators and a description
of the scholar's achievements and character.]
```

6. Upload the scholar's photo:
   - Click into `assets/img/scholars/`
   - Click **Add file → Upload files**
   - Upload the photo, name it `jane-smith.jpg`

7. Click **Commit changes** — the site updates in ~60 seconds ✅

---

## 2. POST A NEWS ITEM OR BLOG POST

1. Go to the `_posts/` folder
2. Click **Add file → Create new file**
3. Name the file using this exact format:  
   `YYYY-MM-DD-short-title.md`  
   Example: `2026-05-01-2026-scholar-announced.md`

4. Paste this template:

```
---
layout: post
title: "Your Post Title Here"
date: 2026-05-01
categories: News
excerpt: One sentence summary shown in previews.
---

Write your post content here. You can use plain text.

To make text **bold**, wrap it in double asterisks.
To make text *italic*, wrap it in single asterisks.

To add a link: [link text](https://example.com)

To add a heading:
## Section Title

That's all you need!
```

5. Click **Commit changes** ✅

---

## 3. UPDATE THE APPLICATION PDF

1. Go to `assets/pdf/`
2. Click **Add file → Upload files**
3. Upload the new PDF named `2027Application.pdf` (update the year)
4. Then go to `index.html` and find the line:
   ```
   href="/assets/pdf/2026Application.pdf"
   ```
   Click the pencil icon to edit, change `2026` to `2027` everywhere it appears
5. Also update the deadline date text nearby
6. Click **Commit changes** ✅

---

## 4. UPDATE CONTACT INFORMATION

1. Go to `_includes/footer.html`
2. Click the pencil ✏️ icon to edit
3. Find the name/phone/email you want to change and update it
4. Click **Commit changes** ✅

The same information appears in `pages/contact.html` — update that too.

---

## 5. UPDATE THE SCHOLARSHIP DEADLINE

The deadline appears in two places. Search for `March 13` to find both:

- `index.html` — the banner at the very top
- `pages/scholarship.html` — the sidebar and body text

Click the pencil icon on each file, update the date, commit. ✅

---

## 6. ADD AN IMAGE TO THE GALLERY OR ANY PAGE

1. Go to `assets/img/` (or a subfolder)
2. Click **Add file → Upload files**
3. Upload your image
4. To reference it in a page, use: `/assets/img/your-filename.jpg`

---

## Formatting Cheat Sheet (Markdown)

Use these anywhere in `.md` files:

| What you want | What to type |
|---|---|
| **Bold text** | `**Bold text**` |
| *Italic text* | `*Italic text*` |
| ## Big heading | `## Big heading` |
| ### Smaller heading | `### Smaller heading` |
| [Link text](URL) | `[Link text](https://example.com)` |
| Bullet list | Start line with `- ` |
| Numbered list | Start line with `1. ` |
| Blockquote | Start line with `> ` |
| Horizontal rule | `---` on its own line |

---

## Asking Claude to Help

Any time you're unsure, you can paste your draft text here and ask:

> *"Format this as a Jekyll scholar file for the judgewaddell.org site"*

or

> *"Write a news post announcing [scholar name] as the 2027 Waddell Scholar, using these quotes: [paste quotes]"*

Claude will give you the exact text to paste into GitHub. You just copy, paste, commit.

---

## The Site Structure at a Glance

```
judgewaddell.org/
├── index.html              ← Homepage
├── pages/
│   ├── about.html          ← The Judge
│   ├── scholarship.html    ← Scholarship info + apply
│   ├── scholars.html       ← All scholars listing
│   ├── news.html           ← News listing
│   ├── donate.html         ← Donate page
│   ├── contact.html        ← Contact page
│   └── books.html          ← Book orders
├── _scholars/              ← One .md file per scholar ← EDIT HERE
├── _posts/                 ← One .md file per news post ← EDIT HERE
├── assets/
│   ├── img/                ← All images ← UPLOAD HERE
│   └── pdf/                ← Application PDFs ← UPLOAD HERE
└── _includes/
    ├── header.html         ← Navigation
    └── footer.html         ← Footer contact info
```

---

*Questions? Ask Claude, or contact your web administrator.*
