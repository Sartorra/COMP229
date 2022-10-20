[**COMP229**](https://github.com/Sartorra/COMP229.git)
---
## Table of Contents
- [Installation](#installation)
  - [Docker Installation](#docker-installation)
  - [More Info](#more-info)
- [About](#about)


# Installation
1. Clone the repository
2. run `npm install`
3. run `node .` to start the server

## Docker Installation
1. Pull the image from docker hub (styxies/express_app:latest)
2. Run the image with `docker run -p 80:80 -p 443:443 styxies/express_app:latest`

## More Info
To run the server in https mode, you need to pass the key and the certificate when you start the server. For example:
```bash
node . "BEGIN CERTIFICATE" "BEGIN PRIVATE KEY"
``` 

# About
This website was created for my COMP229 course. It stores all of the projects relating to the course. The server hosted version of the website can be found [here](https://braedancwilewicz.software/)