---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPWM7ZA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAGXEuLRL1nE%2FZtxSHlTYHd%2Bi1bFXqEYcL9K6GzRP6jAiBh2mEovrf0c%2FPvgz3Lt6PZSCulmM4qtZY3SoMGqzEOuyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMn%2Bvi3Sx61Zsrvn95KtwDX6bNlSxQf7dpsWVR2cuCHtnzqypSb40vVVpKAUtZPS11S3r3leYar9twQn3QdWD%2FtMRL367i1yOtmsYlqHivEtJXz%2BJLZCzejd0PQKQqEFBFOi848H9p2dNIim3OKWEzFzWGzacrtJPzX2rfHziRFl84gxlKeP%2FS%2Fs6tEKT5Ica%2BboV60r1bTWwJ0cyfWSjjCMZ5nkuII4V%2Fhv7P1keIkQxocglTIgWTnGq1l9VwynfGBxm78YtvQGzCGUQCDNfE1dJdhO2uY801L6zKN7vudTO%2Bg7ufXfMQ6E1RRVenVwgAYB6%2BzchlBwVtRW21gLYINzFvtwBOFTvMerLsnTX2UvoaT6tBI8TIHJQDUD0xrn79ijSIDwoVw9aRJHsqagQXwkayXI%2FlwiUeED4P2ZwV5mi1CEv40dIz%2B2tbt9b3RBu8kmxjSmJuwBlNELZjKwy2hr6aJhR%2BtzSN3wPC7VFFJluaXaDgVYYsq%2FlXqkEkD9fS9ZH%2Fgb%2Fsoa0iQwA1fSh4rucaKIHr5xG4%2BcW8zuvjjiVXL7XcQs9XJLdxDeQi%2B15ANRIZR6bJmbUeMeaRxghQrVUCPo%2FnotrLXBK9%2FvleVfH%2Fb8zQ4ZMd8zp7baK2GqLmzEnG7xK1VS%2FHRR4wwJ%2BiwQY6pgErlDjdDQDAOEUhEG3sa88qTg%2BRpzCtApzk0QWT3GxemPgNRaUAtIbWE2uNNjmgA8Mv4IV2NIWRhqMZheVA%2Fin2X5FUVg%2BVPliagHxqUygAiQyI2EBQMwtgeYHwF53Dm7pKyNj2pkIYtJS9A0HipIoq9fkTnz5ZKN2tt3PrcYQ3jn5%2BLKKfZ3mhS0gVxBgcMEYGMldCS8gL5FeooB1zjMqsJjyCcwoY&X-Amz-Signature=5ee23cf76148b95f1971f76a3b542cf7f4e63911ab98f8352b5bea3b7fd8a7e1&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24EBSMV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlf9bgzDmOP5p8gWKuQmNwkevcjgI96Ni1dvpWnMG5mAiBuLmLuUwu6hTViZcfHJjkf7oD0sqATw0Gdz1I311mdDSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdcUBP10uRWKAatGyKtwD2D1a1052KULst40J%2Frw5fkbaQMuXh7pEcc5LRwyxhIpTHZmkYYP5yy6REbUwgDz9OW2sD4k5nJATrxE5Pu4C3JJXAu98rV9qE0sIXWHTeagqVzbl44EIRllQHJjnChgisSl9sTfh29kdknw%2FszFzRAUkmT6hz2SPSRNXbb1dRjRaue8sUuHAWyiaH9xgqw3gR4VNSlm1QLnBFh7aWxUp0dPxLp6ar3%2FmjWZsV6vol2iTTnT4xfF0OeVoW2KXNV0WPrUtQjzESgIJglabqjZRVP%2BzYCbA8tj5JVO4fFRh5CSKk9B8pYvhP06ZdqWKmmwjDiP6m%2F4L0IebHA79%2BIKPA4f%2Fle5xMe%2FFlBWIT0Y1tWcp3Okeu0D1tV%2B15kqo%2BcIbMRgYDXj9vLCrUYVkTK5GlZnigbXjRSA0JVD9nOnzSEPOayIop8kegjCQdA0W57W68XC%2BafJyzhP%2BMKHqE9JSjsZBU51tLDw00D5r5x0jOkgKPn2JkhjdJXIhc824IFNeQcBWCOja%2FOf32BBYFWA8LBxUesFPJ%2B7hzB3OrN9PbvR0zZpZ5FSKfsriwA5WRVZJ%2FG6wYY5JdbXS9gKcysOCY0C4O3hF0lXQeOaKnAIsjbJHaU%2BMs8wDZIySl1sw0J6iwQY6pgHGamDV%2BuES4hwIBnCQmtp6cTfMb7htjvL5MEGC64WG9xiwzxcSoly86ZZ528eD1VdrjBoz%2F3vf2IPb4qz1Nh6HeQgtGzOcFRpnbeUZYn1y%2BbTNiQkITTBhW2Rmei9Q6aHniIRvVvGfkIhF03QrdwNFUPdXplkBqOI5aMRtoAeEWbzZauqMaQZG4BUoIq7WOsUygHI4CFS5bT9i1e1sUXS8HMjWBm%2BG&X-Amz-Signature=f7e092e79726382f522e0287f8405f2f6b3bff551af41e02b76d96b4266e3f92&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
