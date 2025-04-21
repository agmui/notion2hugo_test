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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7Y36WR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDzuQKoULoGv55rf3iM2PE%2BOzslBLhu0uHoNSmUONmd5QIhAIpxJoGlhgVZDW9Vab%2B3ur50hf6TBRBubuRppr5LXUgRKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbHR4c0gbM4MD4n0Yq3AOinR7hwx5qUgKh%2BNpHR8oNBydevnD9rMlkCDyjdzYUQPcptuAiBPHf3uauRnrmZWWzaB%2FwViK5TuuSyWJ5K%2F3f%2FDwX8f1tZ8V8e6riSOhW1YeR4VxK0uPi5k6mic7vho%2FGQvXKa5HWE379F01gAYKDvb1QEMNxWmhEglGELLMPIuJg5gnfhquj%2Bmlx998zjhOo0KhaJggfDK96TjO%2B9YtnIHQoLYOwOnEyPncZatIMU65u%2BWWn7PTQtCHLCOkedD5Z8UdxIb%2BD7UFKxVPfxjR4JsFswmMOBs3e3jU%2Fui%2FSRWnt2ODRN%2Bgx2UCKvlpxPkM%2BYrCQWV5lVZwnOOxjXqQ7y3SJ4cqmYKnCGxrFxhlnVvzy5SGMsKDEMSZDCZe1AM%2FuQL7cLyO%2B0W%2FOMPzppiw7yBa7ztb8P9F98MswKAcZqfnlyoLK1jpjZ%2Fgp0nDKdM43UaCujhlyrx9xu9zE6l5ECLA6UyF1nS2iUsl%2Fqie3EBez6wqmgTvdbE0wkzgkgZ1Bl0nJUkv4yf9ytIscDwb6KM7t1NkW3n4i7CmRfSXbZ6FsrTyPQMRLA7Uu%2BASNVwQGywPts%2FhI0Y3gJCQcIkDc6nsl2Vwup1MjCx3wD4jBXk%2BLjbZCBv5XllVyRDCphZrABjqkAd50wGWJzFM2t5R2A5wB9m0ar5hhSfRA9%2FgVkF%2BbpQtfOYZFpfaa5nHXhF%2FBRd1%2BmG5wo4Paow6ePdzXBEHvFVrTYsyTU5D38Yc2pTKLGxh9LiZ3utaU5El15rMkRxrc%2F0fKvS%2B1DFIAXgw5VY6IL3pmOAV9PjagVAnPZq5apcxjMoGdjVscMZ%2BC2cEJ2hjj3insqQQhL0Ki6LUDih4XOmCBtk7o&X-Amz-Signature=540bf38b80c46e058a1ad72472a100c7b71ecc775bd1867635b663384d85020b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7C7U6J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICU8b4BU0buYq3TlPghY%2BkWB%2BJtT0zOA6HdvPbM9n8YmAiEAgZGBJxsRjiqZiWlYjrSCCdOAF7DS6qVTRLn5EiEKyOkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FaN2yVqzjdnPKoOSrcA2GbT1t03%2FZY3oaOmvcpwkc96ko7bLox6St4Knh13jbCxl2nMPfBhLx7f0S891amg4R8wqFzbsK64JgmhAgruCezbp0Opb4pOO5Ua3CKjOKxKPYGauff2uCGVfYB0JxQ7iOxMAo7ErJTTkB2kflyuZvw56v4fdSKby%2B9n2PUOE%2F9VJxvdKOSsAvTt2cB7bufHl7%2BVC1MAMWDqp8eTcAbKoH30TT%2Bq5xnCxcThHgPfhApYcCqOSceqC7tgHgYLZDH0KgJ3itOfCF%2BbxKDNeLlrPTdLOWHBen2L5ghZa72%2FS2In4GDSZb0n8dISXKDKZJxs26TU8RsJ7WCqLCxSAtgAeJc3DcATBYjsFKFVaZPwgQWq9zw9JiwY%2FYr5h3FAvnxTHfNfuDVSA5s4rLlqAFBjl3Ir7KG5jgHXvdVdyCm4lSYQWfIZARAzpdWKcczsTpzkwiYv3%2Bz159vw0jnpW3n88oUT%2FE%2BGBz%2BBE3u8YsiK4nTlrO8CIoOF0RwmoNC4SnfCQJ9ve6tNwfeVP0Z0TRq2Vo4X4HEhIAkSvA8WosCOC%2BdtQJcbaWXEiOZB3eAI9eCCFVNJ%2Bpsp3nJWvwVS%2BFEiEog02t%2F%2Be8%2BulXZ5AZ1phhnOqFlyJNLkerdnAUDMJyFmsAGOqUBSeDktD9UsK%2F1O51d0XNK%2Be4qnLaa8QXlBpWGmPShbDc5WJ0JKvIS%2BjA%2Bt4dJQZVz70Of7ujfJVKDvqgtyDWJr93YZdgH8qwjV2%2BbZGe1VG6F1sjuwrMPz0L%2B4zOS2FOMr1l1LkvMfg3r3n6piWBZHIpF7BztyGMcD%2Ft%2BI809R8E1nv3aCQFVti2K0jPKvM6OybFwXFL%2B5JAEU06fGY4gJzdPaa0U&X-Amz-Signature=3642ed20ffc66ccd1adfe72c2daf5423ca2aac440c8ad046ac84ad1d9becd3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
