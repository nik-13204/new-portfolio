# Portfolio

A personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and the shadcn/ui component library.  
It showcases projects, skills, experience, and contact information.  
The codebase is organized with reusable UI components and pages that render the main sections of the site.

---

## 🚀 Features

- **Responsive layout** with mobile-first design.
- **Dark/light theme support** via Tailwind CSS.
- **Reusable UI components** powered by shadcn/ui (buttons, cards, nav, etc.).
- **Single-page navigation** with smooth scrolling.
- **Contact form and project showcase** sections.

---

## 🛠 Tech Stack

- [React](https://reactjs.org/) (v18+)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tooling)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
- [shadcn/ui](https://ui.shadcn.com/) (component library)

---

## 📁 Project Structure

```
src/
├─ assets/           # static images and media
├─ components/       # UI and page components
│  ├─ ui/            # reusable design system components
│  ├─ About.tsx
│  ├─ Hero.tsx
│  └─ ...
├─ hooks/            # custom React hooks
├─ lib/              # utility functions
├─ pages/            # route components (Index, NotFound)
└─ main.tsx          # application entry point
```

---

## 🚧 Getting Started (Local Development)

Make sure you have Node.js (18+) or Bun installed.

```bash
# clone the repo
git clone https://github.com/<your-username>/new-portfolio.git
cd code-canvas-main

# install dependencies (npm, yarn, pnpm or bun)
npm install
# or yarn install
# or pnpm install
# or bun install

# start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in your browser.  
Changes hot-reload automatically when editing source files.

---

## ✅ Scripts

| Command             | Description                        |
|---------------------|------------------------------------|
| `npm run dev`       | Start development server           |
| `npm run build`     | Produce production build in `dist` |
| `npm run preview`   | Preview production build locally   |
| `npm run lint`      | Run ESLint                        |

---

## 📦 Deployment

The app can be deployed to any static hosting provider.  
Examples:

- Vercel – connect GitHub repo and deploy automatically
- Netlify – drag & drop `dist/` folder or use Git integration
- GitHub Pages – publish `dist/` via `gh-pages` branch

Run `npm run build` and upload the `dist/` output.

---

## 🤝 Contributing

Feel free to open issues or pull requests.  
Use the existing code style and follow TypeScript best practices.

---

## 📄 License

This project is released under the [MIT License](LICENSE).
