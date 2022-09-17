[**COMP229**](https://github.com/Sartorra/COMP229.git)
---
## Table of Contents
- [Installation](#installation)
  - [Warning](#warning)
- [About](#about)


# Installation
1. Clone the repository
2. use `git submodule update --init --recursive`
3. cd into eJsServerWrapper and run `npm install`
4. return to the root directory and run `npm install`
5. run `node .` to start the server

## Warning
You will need a OpenSSL key and certificate to run the server.
To circumvent this you can comment out any lines that use the https server in eJsServerWrapper/index.js

# About
This website was created for my COMP229 course. It stores all of the projects relating to the course. The server hosted version of the website can be found [here](https://braedancwilewicz.software/)