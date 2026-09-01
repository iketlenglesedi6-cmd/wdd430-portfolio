# Iketleng Lesedi | Portfolio

A responsive portfolio website built for WDD 430. It demonstrates Next.js App Router pages, reusable Server Components, TypeScript props, Tailwind CSS, and a simple Route Handler.

## Live site

Deployment URL: Add your Vercel URL here after deploying, for example `https://wdd430-portfolio.vercel.app`.

## Features

- Home and About pages using file-based routing
- Reusable `Header`, `Footer`, `ProjectCard`, and `ProjectList` components
- Custom `SkillCard` Server Component with typed props
- API route at `/api/hello`
- Responsive, accessible layout with keyboard focus styles

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create a production build, run `npm run build`.

## Assignment notes

Custom component: `SkillCard.tsx` displays a titled summary of a technical skill using typed `title` and `description` props.

`app/layout.tsx` is the root layout shared by every route; it defines the HTML document structure and renders the common header and footer around page content.

The components are Server Components because they do not need browser APIs, state, or event handlers. Rendering them on the server reduces client-side JavaScript and keeps the application fast.
