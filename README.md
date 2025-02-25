# Node.js Production Template

A well-structured Node.js production-ready template with TypeScript, Express, and essential tooling for efficient development and deployment.

## Features

- **TypeScript Support**: Strongly typed code with TypeScript.
- **ESLint & Prettier**: Linting and formatting enforcement.
- **Husky & Lint-Staged**: Pre-commit hooks for code quality.
- **Cross-Environment Support**: Manage environment variables with `dotenv-flow` and `cross-env`.
- **Logging**: Uses `winston` with optional MongoDB logging.
- **Security**: Integrates `helmet` and `rate-limiter-flexible`.
- **Database**: MongoDB integration with Mongoose.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/papusethi/nodejs-production-template.git
   ```
2. Navigate to the project directory:
   ```sh
   cd nodejs-production-template
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Scripts

| Script               | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `npm run dev`        | Starts the development server with hot-reloading using `nodemon`. |
| `npm run dist`       | Compiles TypeScript files to JavaScript.                          |
| `npm run start`      | Runs the production build.                                        |
| `npm run lint`       | Runs ESLint to check for code issues.                             |
| `npm run lint:fix`   | Auto-fixes ESLint errors.                                         |
| `npm run format`     | Checks formatting with Prettier.                                  |
| `npm run format:fix` | Auto-formats code using Prettier.                                 |
| `npm run prepare`    | Sets up Husky for Git hooks.                                      |

## Project Structure

```
nodejs-production-template/
│── src/
│   ├── server.ts  # Entry point of the application
│   ├── config/    # Configuration files (env, logger, etc.)
│   ├── models/    # Mongoose models
│   ├── routes/    # Express route handlers
│   ├── middleware/# Custom middleware
│   ├── utils/     # Utility functions
│── dist/          # Compiled JavaScript (generated after build)
│── .eslint.config.js   # ESLint configuration
│── .prettierrc    # Prettier configuration
│── tsconfig.json  # TypeScript configuration
│── package.json   # Project dependencies and scripts
```

## Linting and Formatting

- **ESLint**: Ensures code quality and enforces best practices.
- **Prettier**: Formats code for consistency.
- **Lint-Staged & Husky**: Ensures quality checks before committing code.

## Environment Variables

Environment variables are managed using `dotenv-flow`. Create `.env` files for different environments:

```
.env.example     # Example environment
.env.development # Development-specific variables
.env.production  # Production-specific variables
```

## Security Enhancements

- **Helmet**: Adds security-related HTTP headers.
- **Rate Limiter**: Prevents brute-force attacks.
- **CORS**: Configured to allow cross-origin requests.

## Logging

- Uses `winston` for logging.
- Supports logging to MongoDB with `winston-mongodb`.

## Database

- Uses `mongoose` for MongoDB integration.
- Define models in the `src/models/` directory.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License

This project is licensed under the ISC License.
