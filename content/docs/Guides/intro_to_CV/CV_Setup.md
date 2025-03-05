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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3TB4BF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUTfqgCKDLz%2BVpAyg%2FOEV6FVHvPzogMxIWG4H1g0T2PwIgWD%2BrAolOziAdt99pHxoAjNPb5XjvTJG4xAnww8k%2Bxboq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMoR3PbZis9lX7aiySrcAxZz%2FpGat5LBAS4xHacIfGG8UCY4HJkzK9z50mU8lsXK0bCLfbUYA0s7bmZqEJlYicVaEND%2FK6CtV6rLjXzjXhZ%2B9w5BvFmw6UeZRyzl8XJ6NCHfsJdc8csrBGH2bOwQBYD2LJpgNmgUpKdJR%2BNypKEw37%2BDiqS88WNwHnoIdOdDE0NUgI%2B5jZMEyN1EGUZFEFWk4cb2Lzpo3QJoARUhgxMny3F0UgMsOsswGShqjldP7M4LVViozvNwymxdQUlz6IBETjaZ40H47YL1mipU4jpXImE01JeaL5Fr9rk8nSCuAvD%2BUYmk0a%2FFL6MbobYIoBKOtrp1ci06nsGDj8T4bS%2Ffl%2F6OUlRxe16ef7YYYr4%2FU7nzbySZYpz1DGoU%2BS82fbYmRgbxOZvtKCayXJNQQU%2FGwkS0votZDIuvtH%2Fc3eJ60Q6ZfweiwUj5HM1o2rTtJ53rnNbCe%2BEFXqawmtm2o2h9zP5m41UBZAFoKfOvVIE8pp9Mitnwn9%2FzNnYEOeZtp56YL4kmxP6Vrfnw2ZNcm8hDpQxrTQslkC4kJfbSRfSqeKUBD9GyRv3Bte%2BJrLDS4bj6Sx7CSyd3sKJF1lcu839l45hy5uxNBb2sQEEsJaUvuOc7Cm6Q3rT3fihlMOWBo74GOqUB0o%2F4SzV31OsyExjsIEePkgB5P6HgS3W%2BJg9jW%2BrRVPgWCq95X9WwiSYzFNn6nRbww1DyuGJGsTxhAjElowgMsYL0TpVxyzW0zdxSEUlq0PM8xlKm6I6qjRdLaZ5n2zqFzX1wS1FO7WFMyszc7eCb3IKln3UOQmIYOl0mCkoYy9%2BisCXBmKu1VLPuGg4QnNXvnV%2Fr3G1VPAKQ%2BRRB4LC8CQmtH0GU&X-Amz-Signature=3aedf1070c9a8e810351242322857a8931d7f60db3a8e081a1fe2ad329ebda67&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VONWOYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFPwUYYACmz7KKYN%2FmZU8Tvyw9Nv7n4AMKRbN1xZrpTAiAtiUrOWa7pf%2B4ZzkX0OGyf3OTAFSeQb0BPfNWibjccyyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMJoHQUJNwqM37IJ47KtwDK9JzmQC6pI%2FZ26W2SDfkCv7%2F5lFYfygvDeWxpXfVpKTOfUlTOBw4ovgQYd4G9sFo9rss03aKF1LFyqdWrcZRERqk%2Bk6NT65KclULczn26pzvTbFU5Ql3iKWIRXU%2FhL8%2F0ArJsnq2scM3aNxvzXA3KriKMrf8AVEcb7aHqOypZpxVrkO5ohSIxycZ0Pm0IIv%2BvnOqtFq1Z%2F%2BmGk9p1Ict8bsElcvGUTx0y7stDB2DYMd3%2F3CuLBzzRH5uuht872suhQXeS0dScgKOHU7ijYDWasjSNCwkhWDaucSlB0rOLnxhEJ2AUcmvF0xw61BRHGCtfNnsopAAbsSVlkmX3xfpQQjzrurgRe7RtY6RNbQNA1x3%2FAjXikC9U6FgpnJRemwttaQH7hDKW1jsqdAzTW6gcf7XYgbI43IxkJ8zAHiPUBntNS6sBQTzMez88zt7D7AU7kW6%2BJOuIT4VekcsAKVos%2BPg8I65NKQaG1RCGdeTmnJKhWJYw15M1kuAVE8PTYRU6qQ2eiVuMMax5y0YIYObuqCv%2F6sk%2B1p68zVi1E6yHjtICLCRFyFCLDCyZau8LzmJ46mG52J644R3hRzzlYsWFwu7W7mQGSj6%2BCNJSeki9QzjelMi3xxOjlO8g6Aw1oKjvgY6pgE9CYyCRXeJEPmGZSCYH0PvKgNAUc6CGNVekQzhGxgWn7a9GAYtxfoU%2FrvQUwW4fAx0bb98TDSdj%2FkYdnLM0elc1lMahypcRbblTI%2F%2FbP6N7gpcHY6KFnKJjJNc%2BD2bKvht9G523xAVsk7RQxsi%2Bx3ItI6dDPFMQhECzpwhm20jhvnVxYl9jTGM2ZnQp%2F9Y4djv24ZCmK1FdY42oCsKhbvmaDnYw%2FNF&X-Amz-Signature=be5424b7cb4f487d19dc71cca57a201720a6bb25500e531ba96242a315e05299&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
