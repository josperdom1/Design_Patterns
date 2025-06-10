# TypeScript Design Patterns

This repository contains examples of various design patterns implemented in TypeScript. Each pattern is demonstrated with practical examples and includes explanations of when and how to use them.

## Development Environment

This project uses VS Code Dev Containers to provide a consistent development environment. To get started:

1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. Install [VS Code](https://code.visualstudio.com/)
3. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code
4. Clone this repository
5. Open the project in VS Code
6. When prompted, click "Reopen in Container" or use the command palette (F1) and select "Remote-Containers: Reopen in Container"

## Project Structure

```
src/
├── patterns/           # Design pattern implementations
│   ├── creational/    # Creational patterns
│   ├── structural/    # Structural patterns
│   └── behavioral/    # Behavioral patterns
├── examples/          # Example applications using patterns
└── utils/            # Utility functions and helpers
```

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled JavaScript
- `npm run dev` - Run TypeScript directly using ts-node
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code using Prettier

## Contributing

Feel free to contribute by adding new pattern implementations or improving existing ones. Please follow the established code style and include tests for new features.
