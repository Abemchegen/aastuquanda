# Contributing to AASTU Q&A

First off, thank you for considering contributing to AASTU Q&A! It's people like you that make this community helpful and improving.

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to the maintainers:

- abenezer037005@gmail.com
- abigailfh19@gmail.com
- Abenezer.woldesenbet@gmail.com
- andinetderejem@gmail.com
- abenezer113@gmail.com

## How Can I Contribute?

### Reporting Bugs & Feature Requests

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/Abemchegen/aastuqanda/issues).
- If you're unable to find an open issue addressing the problem, **open a new one**. Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

### Core Development

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/aastuqanda.git
   cd aastuqanda
   ```
3. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes**.
5. **Run Linting** to ensure code style:
   ```bash
   # In frontend directory
   npm run lint
   ```
6. **Commit your changes**:
   We recommend using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add amazing new feature"
   ```
7. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request** against the `main` branch of the original repository.

## Development Workflow

- The project is split into `backend` and `frontend`.
- You will need two terminal tabs running to work on the full stack.

### Backend
 Located in `backend/`. Run `npm run dev` to start the server.

### Frontend
 Located in `frontend/`. Run `npm run dev` to start the client.

## Pull Request Guidelines

- **Keep it small**: Large PRs are hard to review. Break them up if possible.
- **Describe your changes**: What does this PR do? Why is it needed?
- **Screenshots**: If you changed the UI, please include screenshots or GIFs.
- **Tests**: If you added functionality, please add relevant tests (if testing framework is set up) or describe how you manually verified it.
