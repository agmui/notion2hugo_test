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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYEMD7W%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAz7HiUrBEk%2F2wgxvWMIdV5jZXCthDihFx7qnAqlYaxLAiBwlVE0947UOqNNJkJqxh3EaTg7jxayQZqh57gf0zRUaCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMJyO%2BK5ncwPXDzlkkKtwDoptxWg53%2FTPcDVXlWhPQTMfowSGQbKznTb2rDNbAphDdWvXA1P9QSjQSeLt4W0fAIi9BYuHql93T8mYHPWEyhCG27exO9Jaw2NpFsLnGQRJJxN%2B5PY6iRlM6ZxsJ6U%2BDVDTn53FJ6LwTHnXoTj%2F6cmrMPseATpkOOej8fqpiTvnrPu34pOyC2AIqBKXbaXzhvy1x21xAWG8dUgqPscZWrPdtD%2FsSxWFpy7pVSXcFa0AFbrpw57RKAZYuKagbDhdjhA95OiFOryL2c0MWGe8G7U1b%2BnanzrJqIbsmJ%2BgEFX50xAUX4MNOyj4vzV0keeqF32jhn2If%2BlTK3Ovys3HIx8%2B%2Btk4gf1AT6dZM2kBmRtyItEFdw2B4iimo7o316PgXNtZ5LOqQm2nm1X3QbvGTZ31v%2Bu4xIOwRpJ8tn%2FHNLv6mKuICzmDWZlT5m1Xfxq47Z7SnkIO33RHzs1rx9TKnLpW3HSqV1sfXuAiGmLMy7733Hqg3kdevqCJIFwBbQW2eInSDEpReXICOK2MdL3qEOrtI1ttLLvhNA8U7yVmtWE%2FHPkI5IUG%2BIToY89vpoUCBcexT7F0NLT3C8MT0gpvDArUqCa0RHy0%2BjPFciRE2tqy19cb8JVy2To15fP0w7tDVvgY6pgGhkpc7zzgRig2ZUnTVsCdQaK1Ub1V74guyOjGOTdeiLbn2Z9LnqdJvv75E2pDqKPQzbdQsDFpLC8FmR0JrRfvVtyNjFhLU%2Fsf2hBIrsAjVOPsp87zCuzK8clBDu2z2TPI4LvAERYF%2BY%2BcelEihk2uNBKsU8G2Nwg0cjojOy09bW%2F6yGHvE3CNU2hOw5MV87Fw%2BZYsRBQ%2FqMcOQB7tiPykU8Rbn%2B70j&X-Amz-Signature=98644381fe8c5c3c40879be1716aed3e94cc3d36e0f688440c4240a5927ee961&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRS5WFQV%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0jDHxj7W%2BM6O605hKfhPdAmVRz6L8S60pCOJKxF7LywIhAIb7SYcy77%2FzHfJ6rjjIaoWS5ZEwJW0KpKWzD%2Fogp7SIKv8DCBUQABoMNjM3NDIzMTgzODA1Igx0SQL76FsSmnyVggAq3AMEKf%2BmWD6aOu94Dc8rf%2B%2B3AOfTKxBM2nlCEYIm3GDC3tqG12%2F6rJGjtmcVml42cxF1SYx6vDbpbqB%2F0%2FE6jnwPug7dMZxV90hbGmEuVpNzM3uzmjOpCgnuf5dLpqB56ROk%2Fdvg0bgbijB4m57hsqsIbZE6gUVs0L%2BOgAPPqjjnxpRxLCNx9MpGEFubprO0vqmHU7j7ANdlzQl3TdwZA9bO8l9nc1kIaW01vKgltm2lPofPAH6Kcqfsf%2FKerG10P934Aw7zGERTWaeTLIk05eefncGrF%2FbbaFx4V3Hw0bQEi7PqFvDV812xEq53%2FPsRrjqJsItXuR583oh6KptFB71zK7iphVlMpXqrQEvsqo5%2BCV2KNX%2B7WztjVG0hwOLtCX8dz1SshSGFK87pKsNYUV4qpMlFQWZqYJ%2F0Us6Emarl%2Be%2FSIeH10cIW3KVzpxAF2T0fa3wSiZTIXb5opejCstjIz2GupLXzfJ%2FT3RY7JQGXCcmGFa7%2F%2BAW%2BSFIKU9Cn86RP%2F%2FuPhmvBeabg9nQQtL9iOcAY%2BYHWalpl0M6Grjc1K%2BMsLaURugTj3kIDxUlnxLkKhdt3IukjmSw78%2BZnzAGB39SbaHCheZ0Zvx13JlF4iTwnf4HTpw3KU1YhcTCk0NW%2BBjqkASo4uiv76kkjq5ICX6%2BHJsXT2hkQ05PR2RZvok1JZQNO4W5vaTXl2HMVnQzPWG3iylsX86E9ivxLtvSWNhnQDKQJfpLm5Jw%2FKZM0LPqEdbABTHF7x3vhwGpGISmODsUoktG64pa%2BLTELJjd%2BFnxWgpNzp1KPgAnuPRrjalCJuhzUTjKEObAt9RiVEIwKxgwxLZKo5kkVE3aDH%2Fl0ZuupR4YWoIiV&X-Amz-Signature=2177eb206034f299b4318bcb8474e1ea2bc5b0d7638d01a3a2354cc3b366b72d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
