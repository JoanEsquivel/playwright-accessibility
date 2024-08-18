# Playwright Accessibility Testing Project

This project is set up for running automated tests using Playwright with accessibility checks powered by Axe. It includes TypeScript type definitions to ensure type safety during development.

## Libraries Used

- **[@playwright/test](https://www.npmjs.com/package/@playwright/test)**: Provides a powerful testing framework for end-to-end testing in Playwright.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: TypeScript definitions for Node.js, ensuring compatibility and type safety when using Node.js APIs.
- **[@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright)**: Integrates the Axe accessibility testing engine with Playwright, allowing you to run accessibility checks as part of your tests.

## Quick Overview

This project allows you to run end-to-end tests on web applications with a focus on ensuring accessibility standards are met. The integration with Axe ensures that your web pages are evaluated against accessibility best practices.

## Installation

To set up the project, you need to have Node.js installed. Then, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Running Tests

After installation, you can run the tests using the following commands:

1. **Run All Tests:**

    ```bash
    npx playwright test
    ```

2. **Run a Specific Test:**

    ```bash
    npx plas