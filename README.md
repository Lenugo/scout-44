
# Grupo Scout #44 Website

This is the official website for Grupo Scout #44, built using [Docusaurus](https://docusaurus.io/), a modern static website generator optimized for documentation and educational content.

![Scout Logo](/static/img/logo-gs44.png)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) package manager

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Lenugo/scout-44.git
cd scout-44
yarn
```

### Local Development

Start the local development server:

```bash
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

## 🛠️ Project Structure

- `/docs/` - Documentation content organized by scout units
- `/src/pages/` - React pages for the website
- `/static/` - Static files like images and PDFs
- `/blog/` - Blog posts (if used)
- `utils/` - Utility functions and scripts

## 📝 Content Management

- Add new manuals to `/static/files/`
- Update calendar events in `/src/pages/calendario.mdx`
- Modify unit information in the corresponding docs folders

## 🏗️ Build and Deployment

### Build

```bash
yarn build
```

This command generates static content into the `build` directory that can be served by any static hosting service.

### Deployment to GitHub Pages

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

This builds the website and pushes to the `gh-pages` branch.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
```

This README provides:
- Clear project identification and purpose
- Visual element with the Scout logo
- Better organized sections with emojis for quick scanning
- More detailed project structure information
- Content management guidance specific to your Scout website
- Improved formatting and readability