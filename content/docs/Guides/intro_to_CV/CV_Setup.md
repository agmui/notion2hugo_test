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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J44HR4L%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB7np7nSRZO0xwqb%2FrCbHUix3Ox5NlOh2VoJJ5tAe5iAiBoaOSxLhO45dycjCOQsKDQhwOP%2BLHg7v%2FOGm1dFfHi3CqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7lxpP6E08UaSmV1KtwDSivyeml8Gyt%2BKS7Cmo4BqCJW%2F4dz9ozvujJqBP2n3UwiTwBlBospikhv543w8AYnwUPZkZujcKhlY%2BJ7FTAYTepLirw%2FUCXBr1XCjd0KUGGvXEmrEubVHhNSsd%2Bfkg3yCJ10nx387Pz9OYiCoj3DxRcFr40I0sYjlS0GQNR4CMNNug%2BBUP%2B7541gcZgFFRjy%2BFmLJgeGG5obCk71dwhl8M1T2Mzp%2FRdJBEICErBHyX60FKj9p%2B6OcbUmSYmvVhiqbGSwm8U1RA8uPCE7mixjN2tMjxtvvgKUOT8n%2F%2Bo1Cu5BLjIl7aELhISH2uWnv1mhhaJ9m98YxPhU6O1HJWQfx9KKDSVhtNyThKA4ofRC57E3k0cbty0ZAP6qXk6PRwDs0h87ZlWrqxAkrWKaEV8%2F%2B1mlnXQ37KPhWG3%2FaZAxeaN6P3Om3h7997A8i7D0hajCa%2FYdu9J32UYKZDF3NKxXGRCeCdyR27FwOQPOw5nbKLFvMsUqqvIyumnGi06X2yrhKtQG%2FHHAwHl0J2hoFSBlOsAbh5jwEECz78WyHhHnwsoZEHyLVKhttN9tgcrZ82rWKTHB9ZBWtYuvpCILhNLTJPIy8PLj%2FdawTbsy4I5SiqUJfq%2BI%2BEXU0owmWHAw8rqIwwY6pgFOCtOXqhN9cKhy%2BfRovJxCJTUzmiKHgXoXVKWeoBJVNjlSEj2lUoR%2Fmbq26YDtKNAoLmTQ2jEBFg0SQXQ45sL2oDqYthl57IESBFqX7T07G2o8ABDPCV271k3PaSYSNLS4oT%2B9pEPWSLWqn1RboArfjXytEVUFMmPdf6%2BxBbGluaqekNPV3d6s1MDKTq6B54WwL6bN%2Bvgx%2FMxZ9Z33AXEWEc6GU1ax&X-Amz-Signature=fefc106137751a74b26e4b438fd34a4876f4e7ad1b489dba2a13bdcbcd54f948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOX5RREX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYmN54XrlYLQrXZR%2B2aFNEptbr2%2Fy1cshncCtlqizPIAiAJLq8Ws8ZfQ7x1ZRcgslvHzNrzzdZ%2FydQj5Pidd%2Bdh2iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkpnQJgM1wHyyBdeYKtwDErVkwk%2FcR5UGT8yl9YLOgaop7dEozrEJygdTeKuRxMrBYznPp%2B2d01i1or1DTywIiXa1ldv6hTjlFl7Dc%2FigEulU5tV90cXr55pvzAnk%2BeXzWzp9oMHHHBIYxbyQS9DqcIzQZqDm463zjPQU5gGwBeafezJu%2BiHwF8%2BUiomMH7Op4awXugD2w2SEtH%2Bctuw2FumYSDkPYLvDgehLqzm8RmxVUb8u1M3PSX0TUT5cROf0zU7IUntZ%2FX92fmPOF%2FWmdAK%2BCv8kU1PAdl9waBdT1jbFf9DE4ltMQIfkWD9bwM%2BTWPG3rNVjiPAjIi46m1DfGjFNilCcm2LFmIeo6RNJ6tz8dCrN8ZggW6dSqZCehFwqNU8oYpDN1NBgHyIt9c9lgg9ELM7qeIfAlZkmW0yRhAWe4xX4jIeUXRXO7pSE95zRdn32sVyqrOcOE3%2BjGmqg4k7Pbn0zSCqPcnagxwK%2Bie3s9u%2FfJI0MIDa6yUYRGshCmxKD9VqjWdVpr%2FYGG%2FW3tXCpfapTHCjd2e8bIg9waIc%2FyScUNxnP9xHeaCNYHTRq%2BKjhfNMsYdsOQrDMC68HcWeX4oFohtFYs6W185MtqkUENt4%2FGAtfErQYJgNMnn5dgIeL2wCKJXz3M2IwmryIwwY6pgGv6xvTzmd1Lz%2Flg2CQ7aZRQbxnwsDNNMQ%2FAZ8rtVBSLD7PPL9QKZPYv4Z%2FPOOD0Yk2tezOabOsJr2v0Mnq%2Fgx42rDapsGMbtohpj4MciBbbIYQRSmORHtCw6cdtM5bD4Pl9hOO%2F1w66mT9VwUhP7k7kUCpAfM6W4x3o1F2PeAuDcOeslVHikUBsrBHOBKFsx887IDkPUTJ7%2BDF%2Bb3bmY3fKWkLeYI1&X-Amz-Signature=2337a387f8033a9df8cba59f0932e2471af5dd89aa87a6a2b04fddb728ec3443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
