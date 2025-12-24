# Contributing

Thanks for your interest in contributing!

## Ground rules

- Be respectful and constructive.
- Follow the Code of Conduct: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## Getting started

1. Fork the repo.
2. Create a branch: `git checkout -b feature/short-description`
3. Install dependencies:

```sh
cd backend && npm install
cd ../frontend && npm install
```

4. Run locally:

```sh
# backend
cd backend
npm run dev

# frontend (new terminal)
cd frontend
npm run dev
```

## Development workflow

- Keep PRs small and focused.
- Prefer clear names and simple implementations.
- Add/update documentation when behavior changes.

## Code style

- Don’t reformat unrelated code.
- Match existing patterns (components, hooks, API helpers).
- Run lint before opening a PR:

```sh
cd frontend
npm run lint
```

## Reporting security issues

Please do not open public issues for security vulnerabilities.
Instead, email the maintainers at: [ADD_SECURITY_CONTACT_EMAIL]

## Pull request checklist

- [ ] PR has a clear title and description
- [ ] UI changes include screenshots (if applicable)
- [ ] Lint passes (`frontend/npm run lint`)
- [ ] Any new env vars are documented
