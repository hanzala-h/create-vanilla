<p align="center">
  <img src="./images/logo.png" width="20%" alt="Create-Vanilla-Kit">
</p>

<h1 align="center">Create-Vanilla-Kit CLI</h1>

<p align="center">
    <em><code>❯ A powerful and easy-to-use CLI tool to quickly create new projects with custom templates: VanillaKit-Static and VanillaKit-Express.</code></em>
</p>

<p align="center">
	<img src="https://img.shields.io/npm/v/create-vanilla-kit" alt="npm version">
	<img src="https://img.shields.io/npm/dt/create-vanilla-kit" alt="npm downloads">
	<img src="https://img.shields.io/npm/l/create-vanilla-kit" alt="MIT License">
</p>

<p align="center">
		<em>Built with the following technologies:</em>
</p>

<p align="center">
	<img src="https://img.shields.io/badge/Node.js-339933.svg?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js">
	<img src="https://img.shields.io/badge/Express.js-000000.svg?style=flat&logo=express&logoColor=white" alt="Express.js">
	<img src="https://img.shields.io/badge/WebKit-black.svg?style=flat" alt="WebKit">
  <img src="https://img.shields.io/badge/Mocha-8.4.0-green.svg?style=flat&logo=mocha&logoColor=white" alt="Mocha">
    <img src="https://img.shields.io/badge/Chai-4.3.4-yellow.svg?style=flat&logo=chai&logoColor=white" alt="Chai">
    <img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
</p>

<br>

## 🔗 Table of Contents

- [⚙️ Installation](#installation)
- [🛠️ Options](#options)
- [🤖 Prompts](#prompts)
- [📂 Templates](#templates)
- [💡 Examples](#examples)
- [🛠️ Development](#development)
- [🧪 Testing](#testing)
- [📜 License](#license)
- [🤝 Contributing](#contributing)
- [🧱 About the Templates](#about-the-templates)

---

## ⚙️ Installation

### Use Directly with `npx`

You can quickly scaffold a project by running the following command:

```bash
npx create-vanilla-kit my-vanilla-kit
```

### Global Installation

Install this tool globally to use it anywhere on your system:

```bash
npm install -g create-vanilla-kit
```

---

## 🛠️ Options

- **-t, --template `<template>`:** Choose the template you want to use. Available templates are `vanillaKit-Static` (default) and `vanillaKit-Express`.
- **-h, --help:** Display help for the CLI.

---

## 🤖 Prompts

When creating a project, the CLI will ask you a few simple questions:

- **Template:** Choose between `vanillaKit-Static` or `vanillaKit-Express`.
- **Initialize Git:** Would you like to set up a Git repository? (Yes/No)
- **Install Dependencies:** Do you want to install npm packages right away? (Yes/No)

---

## 📂 Templates

### vanillaKit-Static

A versatile static project template designed for rapid development of fast, efficient websites. It comes with a Webpack boilerplate to bundle your HTML, SCSS, and JavaScript assets seamlessly. Ideal for creating static websites with modern front-end technologies.

### vanillaKit-Express

A robust Node.js project template featuring Express.js and WebKit support. This template is tailored for swift development of server-side applications, including built-in support for SCSS for styling and PUG for templating, making it perfect for building dynamic web applications quickly.

---

## 💡 Examples

### Create a VanillaKit Static Project

```bash
npx create-vanilla-kit my-static-site
```

### Create a VanillaKit Express Project

```bash
npx create-vanilla-kit my-express-app --template Express
```

---

## 🛠️ Development

### File Structure

```sh
└── create-vanilla-kit/
    ├── images/                # Directory for images
    ├── src/                   # Source code
    │   ├── index.js           # Main entry point for the CLI
    │   ├── utils/             # Utility functions
    ├── templates/             # Project templates
    ├── tests/                 # Test cases
    ├── .editorconfig          # Editor configuration
    ├── .eslintrc              # ESLint configuration
    ├── .gitignore             # Git ignore file
    ├── package.json           # Project dependencies and scripts
    ├── README.md              # Project documentation
```

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/hanzala-h/create-vanilla-kit.git
```

### Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd create-vanilla-kit
npm install
```

### Run Locally

To test or develop the CLI locally, use the following command:

```bash
node src/index.js <project-name>
```

Replace `<project-name>` with the name of the project you wish to create. This command will run the CLI tool and create a new project with the specified name.

### Additional Development Tips

- **Editor Configuration:** Ensure that your editor is configured with the `.editorconfig` and `.eslintrc` files for consistent code style and linting.
- **Testing:** Write and run tests located in the `tests/` directory to ensure your code works as expected.
- **Documentation:** Update the `README.md` file with relevant information about your changes and development practices.

---

## 🧪 Testing

You can write unit tests using **Jest** or **Mocha**. Be sure to add tests for critical functions such as file operations, Git initialization, and dependency installation.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are always welcome! Whether you have new template ideas, want to fix bugs, or improve features, feel free to:

1. Fork the repository
2. Make your changes
3. Submit a pull request

If you spot any issues or have suggestions, please open an issue, and I'll get to it as soon as I can. Even small ideas are valuable!

---

## 🧱 About the Templates

Both **vanillaKit-Static** and **vanillaKit-Express** are WebKit-based templates that I have personally crafted to help you start new projects faster. These templates are flexible and can be tailored to suit your needs, but they’re built with simplicity in mind.

Check them out on GitHub:

- [VanillaKit Static Template](https://github.com/hanzala-h/VanillaKit-Static) 
- [VanillaKit Express Template](https://github.com/hanzala-h/VanillaKit-Express)

---
