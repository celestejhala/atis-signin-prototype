# ATIS Sign-In — Interactive Prototype

A clickable prototype exploring new sign-in functionality for [ATIS](https://atis.travelalberta.com)
(Alberta Tourism Information Service), built to match the live Travel Alberta product.

**Live demo:** https://celestejhala.github.io/atis-signin-prototype/

## What it covers

- **Landing** (`#/`) — "Meet the new ATIS sign-in," with an *"Are you joining an existing org?"*
  accordion that opens a **Join an existing organization** modal.
- **Sign in** (`#/signin`) — Microsoft/Google SSO, email/password, and a *"Join an existing org"*
  info tooltip, plus the "As of November 5, 2025" guidance sidebar.

Sign-in actions are **visual only** — this is a UX prototype, not a real auth flow.

## Tech

Vite + React + React Router (HashRouter) + Tailwind CSS. Fonts, logo, imagery, and color
tokens are reproduced from the live site for visual fidelity.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`.
