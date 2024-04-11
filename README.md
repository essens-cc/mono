# Mono

— a minimal web template with distinctive typography

## Features
- Ready-to-go web-template made with [Astro](https://astro.build);
- Distinctive typography — [Monaspace Neon](https://monaspace.githubnext.com/);
- Sustainable code and design;
- Integrated astro collections;

![Cover](/public/images/cover.webp)

## Scores and Performance
- [A+ Digital Beacon Score](https://digitalbeacon.co/report/mono-six-snowy-vercel-app);
- [A+ 95% Website Carbon Calculator](https://www.websitecarbon.com/website/mono-six-snowy-vercel-app/);
- [100 Performance PageSpeed Test](https://pagespeed.web.dev/analysis/https-mono-six-snowy-vercel-app/joezpa5jsx?form_factor=desktop);

## Structure

Inside of your Astro project, you'll see the following folders and files:

```plaintext
/
├── public/
│   ├── css/
│   │   └── global.css
│   ├── favicon.svg
│   ├── fonts/
│   │   └── MonaspaceNeonVarVF.ttf
│   └── images/
│       ├── article.webp
│       └── cover.webp
├── src/
│   ├── components/
│   │   ├── Back.astro
│   │   ├── Header.astro
│   │   └── ListItem.astro
│   ├── content/
│   │   ├── blog/
│   │   │   ├── on-documentation.md
│   │   │   └── opt-in.md
│   │   └── pages/
│   │       ├── index.md
│   │       ├── now.md
│   │       ├── about.md
│   │       └── uses.md
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── now.astro
│       ├── about.astro
│       ├── uses.astro
│       └── journal/
│           ├── [...page].astro
│           └── [slug].astro
└── package.json
```

![Article](/public/images/article.webp)

## Customization and development

Use any package manager you like to work with the repository. Use these commands.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

