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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVYSKVJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCEVJQ36k1vIGaKS277c%2FcNrvibJJdFTMeYjhklgA0gCAIhAObPJm0dIo8Yq6%2FGC4%2FOgKLaLcSNpG9%2B8jfGmUbuY3egKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fl2le%2FLTfM9k89aAq3APzl27POa3GOHDGPcjvJFlWj8cCpD1a6NyAeGzCImtXDi3%2B%2F7r4DoDP0qgGugCHX8Zg5EJwSv9Z3pJolPfaEvOZe8SbeqCX4nKnyooRh%2BWVV1Cfx6vlpCb%2FWMv%2BSA1o3u3eqQ3y9jDV5Wr4aoZLwJi%2FKbCjhNJ4kKNp3boOQozfdVy44zcOveOeE%2FE2yjr5pH5klMxHkbbnT0iPBVNa8g81G%2BGgbPc3LVAqTXXix0YDcpZWjTLP4HHcIPKzuvidXtkJ8y44jayJxry4aB47GQXg%2BVLthlGCt289A67CUtS5Apv%2FbW3EtGxcfDABeULbnDAU3ZbovlIcaF8B4EaxeniNmbAXE9gAVnbNWMmMtJfYnQT3IEb3LU8hvRfDqZrZeiKvicLzbbFOTMS1IPX3l3wsd4JTii2gpwGu4RxPIj3CDpJbZ4gJB6hyb4ydK%2FcpMdp1q4Eexxsirf52xR2g05m14gr8QyRGcTjsXN%2BZf%2Bp%2F3riKDe6PDmi%2FLsapWkRZAXhikaLPrMfU83H36UAOJETkWZ6SMX9ox63Vm3Ay69rJ9TTVv7xmJvrccmCZqz%2BTLl7ptt61PW2mfqYovK%2F6QJUddOKVpClGYSuWXIKf0h%2BzPmJse6VMa1uJ6J8KcDDkxfC%2BBjqkAfrDBx4aaocuOzoOgxEaoSRrAxDK734d6TKLD5LszAkl%2B2BgC9HCdwkmQr4WSjxXH3HQiY09aZyVK%2B4nDm1Gg8oMymxq4LLWs164FG%2FlVxKRDkyG946YL7iBNM7N1cp1u0OHu23WNJQ3DwYs7jgraa32bAXzVrvEjcQMQTbwXm5oxtAe8zwt4T7YpS%2Fvcp9v0VsQdBMELv1u3PGGdVhoGfMOhdCG&X-Amz-Signature=ec2db4bbd5d742703f3c3bf60063ed66e7cb19ec57a0acb168c750e1d1f79e76&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2FA46T%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIB9SFDr3TAtuP5dk9zHJLjxEJxgfRO7mIfYvUCYkO3m0AiAf4kbl3JiGu3%2F3dU7WHio7mRFXyZLNNKDk2vfRGPnx%2FyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNfe5a0si9LCWymcpKtwD4%2FJ637NzRuGn%2BI%2F9MAYJkHWmykWt5qml3z3R%2B5F%2FjX0DHmUKEPcaEjcyb4muLAd3ZFAORY2V7c92rMGMVIeBhCww%2B4JAlaKE%2Bjx7Y8yl8Gti9MZ%2FTG05F%2FaeYCIG4siBwJ7NLrUoAYVFbrixoriK1kh4xeSFVUD4C07fsivwaGOa2yPHKHyOt0HM1vUqLCCLEx2QgHCSFl9O9Xzkv%2Bhzn9HDI%2BcuBE%2BaOOvoC1ddOYdUjbYJI3A2uv9QRiBa3Ir%2FbwV39auEUKlnNmD3lZIe5BEHnEueOGdk%2BLBate%2BrZAZJvL0CUI2kssXXFTQNtbXU4%2BMNrkQ5uN9X9obruWeKAwodAiL0hJvG4wMJI80v54LhVkgOaTxbNB7wUoPlBD2gKxL%2Fp92uSihSuslXEKLUflta6vAfSWFpF1%2B95C2dYSaYu70OrDt6rLafoRXfR5OyiS%2FVv9aNHcShRALSr9phLt9u3ykvfe34TRGOx8O%2FKu0LewCE2pivPsz8A9KqYxKu5VAHboZSO3naV%2BXCZm8S2NyZRnYHeEwNzLUnvOxYs9HjeWVXBDkCqHaFjyx%2FhYxmIJATpppAQAz4iL%2FNqu0ndY0GWNTI%2FAfukrpCh9oI0uXlz8bYfUsw%2FsYFBeAwxcTwvgY6pgFEEM%2FRKQUz2d6BytAs5eCG%2B9wjOBbkeBGG%2BmtNo2XSbLLK7Nfs3bLIn5M8FGg2nTp%2Fnyw7YiD%2BYJH9ZVhIs9EdtJoR3ZUZe5cWTbymHRoSpAwLomd42Svyt4D8ueq5Hdsh4sL35%2FMfh0yN1NitBRtAPvZkyjf2W6fctagpJohZS3Goz%2BoP4NW81v9nK5DXm32P%2F87dn1Vwr%2BGfogxkBzT9s4j2psfu&X-Amz-Signature=5c5d3fdf07132d888c3a275e1949c6a1058ec39ca822724ed5a435f6774d5079&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
