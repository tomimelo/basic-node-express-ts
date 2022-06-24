<!-- PROJECT SHIELDS -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tomimelo/node-ts-mad-server">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mad Server template</h3>

  <p align="center">
    This is a basic http server in typescript for a node project based in express. It has error and exception handlers, loggers, services, repositories and database connector incorporated. Supports class based controllers
    <br />
    <a href="https://github.com/tomimelo/node-ts-mad-server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tomimelo/node-ts-mad-server">View Demo</a>
    ·
    <a href="https://github.com/tomimelo/node-ts-mad-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/tomimelo/node-ts-mad-server/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#build">Build</a></li>
        <li><a href="#development-server">Development server</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![product-screenshot]

### Built With

* [Node.js](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Mad-Server](https://github.com/tomimelo/mad-server)
* [Mad-Logger](https://github.com/tomimelo/mad-logger)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need a copy of [Node.js](https://nodejs.org/es/) as an environment to run the project. Then you need to use a dependency manager like npm to download dependencies into your project.

* npm
  ```sh
  npm install npm@latest -g
  ```

* Typescript
  ```sh
  npm install -g typescript
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tomimelo/node-ts-mad-server.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Compilation

Run `tsc` to compile the project. The compiled files will be stored in the `build/` directory.

### Development server

To watch for file changes and restart server automatically is recommended to install [nodemon](https://github.com/remy/nodemon) and [ts-node](https://github.com/TypeStrong/ts-node). You can install both globally by running `npm install -g nodemon ts-node` or locally as a dev dependency with `npm install nodemon ts-node -D`.
<br>
Open a terminal on root directory and run `nodemon` to rerun server automatically on file changes.

<!-- USAGE EXAMPLES -->
## Usage

Run `npm start` to compile and run the server. Server will be running by default in `http://localhost:3000/`.

Folder structure
Helpers functions
Valid error codes
Error handler

<!-- CONTACT -->
## Contact

Tomás Melone - tomasmelone@hotmail.com

Project Link: [https://github.com/tomimelo/node-ts-mad-server](https://github.com/tomimelo/node-ts-mad-server)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Node.js](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [Mad-Server](https://github.com/tomimelo/mad-server)
* [Mad-Logger](https://github.com/tomimelo/mad-logger)
* [Config](https://github.com/lorenwest/node-config)
* [Nodemon](https://github.com/remy/nodemon/)
* [ts-node](https://github.com/TypeStrong/ts-node)
* [README](https://github.com/othneildrew/Best-README-Template) template by @othneildrew





<!-- MARKDOWN LINKS & IMAGES -->
[forks-shield]: https://img.shields.io/github/forks/tomimelo/node-ts-mad-server.svg?style=for-the-badge
[forks-url]: https://github.com/tomimelo/node-ts-mad-server/network/members
[stars-shield]: https://img.shields.io/github/stars/tomimelo/node-ts-mad-server.svg?style=for-the-badge
[stars-url]: https://github.com/tomimelo/node-ts-mad-server/stargazers
[issues-shield]: https://img.shields.io/github/issues/tomimelo/node-ts-mad-server.svg?style=for-the-badge
[issues-url]: https://github.com/tomimelo/node-ts-mad-server/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tomasmelone
[product-screenshot]: images/screenshot.png