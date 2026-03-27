# judgewaddell.org

**Judge Waddell Endowed Scholarship Fund** — official website source.

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

---

## For Non-Technical Editors

See **[PUBLISHING-GUIDE.md](./PUBLISHING-GUIDE.md)** for plain-English instructions on:
- Adding a new scholar each year
- Posting news updates
- Updating the scholarship application PDF
- Updating contact information and deadlines

No coding required — everything is done through the GitHub web interface.

---

## Local Development (optional, for developers)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`

---

## Site Structure

| Folder / File | Purpose |
|---|---|
| `index.html` | Homepage |
| `pages/` | Static pages (About, Scholarship, Donate, Contact, etc.) |
| `_scholars/` | One Markdown file per scholar recipient |
| `_posts/` | News and blog posts |
| `_layouts/` | Page templates |
| `_includes/` | Reusable components (header, footer, scholar card) |
| `assets/css/` | Stylesheet (navy & gold Highlands theme) |
| `assets/img/` | Images |
| `assets/pdf/` | Downloadable PDFs (scholarship application, etc.) |
| `CNAME` | Custom domain configuration |

---

## Deployment

Push to the `main` branch. GitHub Pages rebuilds automatically via Jekyll.
Custom domain: `www.judgewaddell.org`
