# VanillaKit Static

## Overview
**VanillaKit Static** is a modern boilerplate project designed for static website development. It uses Webpack to bundle JavaScript, SCSS, and other assets, and serves files using `index.html`. The project is focused on simplicity while offering powerful features for developing static sites.

## Features
- **SCSS Support**: Write your styles in SCSS, and have them automatically compiled to CSS.
- **JS Bundling**: Efficient bundling of JavaScript modules for development and production.
- **Optimized Assets**: Webpack handles asset optimizations, such as minimizing JS/CSS and managing file hashes.
- **Live Development Server**: A development server for live-reloading and quick iteration.
- **Cross-browser Compatibility**: Uses PostCSS for CSS autoprefixing and future-proof features.

## Project Structure
```
VanillaKit-Static/
├── src/
│   ├── app/            # JavaScript entry files
│   │   └── index.js
│   ├── styles/         # SCSS entry files
│   │   └── index.scss
│   ├── shared/         # Shared assets like images, fonts
│   └── views/          # HTML or template files (if any)
│       └── index.html
├── public/             # Output directory for the final build
│   └── index.html      # The file served to the browser after build
├── .gitignore          # Specifies files and directories to ignore in git
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── webpack.common.js   # Common Webpack configuration
├── webpack.dev.js      # Development Webpack configuration
├── webpack.prod.js     # Production Webpack configuration
└── README.md           # Readme file
```

## Installation
To install VanillaKit-Static, clone the repository and install the dependencies:
```sh
git clone https://github.com/hanzala-h/VanillaKit-Static.git
cd VanillaKit-Static
npm install
```

## Usage
### Generating the Static Site
To build and generate your static site, use the following command:
```sh
npm run build
```
This command will compile and optimize your source files, outputting the final static site to the `public` directory.

### Development Server
To start a local development server with live reloading, use:

```sh
npm start
```
This will launch the development server, allowing you to preview changes in real-time as you work on your site. The server will automatically refresh the browser when source files are updated.

## Contributing
We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please contact us at [sayhi.hanzla@gmail.com](mailto:sayhi.hanzla@gmail.com).

## Acknowledgements
We would like to thank all the contributors and open-source projects that made this project possible.
