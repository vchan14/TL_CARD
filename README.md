# Tiến Lên Realtime MVP (Nuxt 4)

Production-oriented scaffold for a realtime Tiến Lên web app.

## Stack

- Nuxt 4 + TypeScript
- Nitro server routes
- Tailwind CSS
- Supabase-ready runtime config placeholders
- Vitest for unit tests
- Playwright folder scaffold for future e2e tests

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - run local dev server
- `npm run build` - production build
- `npm run test` - run unit tests
- `npm run lint` - lint codebase
- `npm run format` - format files with Prettier

## Included routes

- `/`
- `/rooms`
- `/rooms/[id]`
- `/rules`
- `/settings`

## Notes

- Supabase integration is intentionally not implemented yet.
- Game rules and realtime logic are intentionally not implemented yet.
