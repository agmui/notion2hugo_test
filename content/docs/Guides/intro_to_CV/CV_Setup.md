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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AMIZTT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUs5hr96pjnniyQdAMfrp6fpxywSt4FYtzFhqkgFpjTAiBhYu38KELlbJHop1ZEPcKeuYc%2B44Crb0ddW10txOyRpCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0e8Vy2jXv7BJMOj8KtwDgRcVyXMd9Zk1IjvFvwSwINcmr9XAEKMyz3giN8elduDEeVY0eOFd5DNbWDbqhbMtnn9kkqaVSJlCGH2uIsPVtUfjT9NYNkZ0J82%2BurDLETSvSqHWORy4eihoNdHVSj8a1qGJ%2BTUMNQUvvShXT5zlZC2%2F0H9%2Fq%2BZgij2lC%2FWOFu9UXctCCdwRikDWkBd3PeutLMsnszQB6ZSlB%2FFC85A3Q12P%2BSB47FR1LRdbAw5KyyTRjZ81tfQd1pCnjeAEfnJBRpvn2leCmZgq%2BzvwBb84mWoIujEKTQXJW%2BXNDzYdHqQMjdoQksDt2QAxDABW76IYcf6vf1fIMrFYyoommbpGU54tYJkW1iyfclQpdw%2Byq%2F%2B%2Bgx1NIxRuhGU43Fj0WywXsoE%2FZacr645OakjFAE5mK9OJZTBZWSKd9g9gA3aUZyBRkRCOcYT9FR6e7QgVAsdefZrwamZQf4eDAVkS7zF4FzL31Bmbmp9p331MvpURQY97prwxOF1srR1ekGY1MZhYeTk5xEjZd2BxQD34mUYggfFZKy9x7thv9PNFIma2jyFrqHDe%2BUp2EWAr5Ek2I4zY8RYXQR2Ok4MUm4N2196fxp0X3aE%2B05fZRxH0yO1zixts899p6mY3o8ZOUk0wnIGEwwY6pgEuYQbIWol9F6EJuoqP39lpRq2%2ByF19McKZW8vFvQQ7a9QKBZtQFya3GEicSkoOtuBjBE2nrZm0fspnRvEfkmjAPAzamfeHZKkVU%2FH%2By6KYTr1CpYcPW26fG0N8rVyQBTOTCnxPHVJIYQUt7nLQdId5sfvvpgdwsqhv6FUlv23OGpnp7usEHJ9BzJhVRuq9MVFI2cGFYele4C0h824agReW0z7vf8om&X-Amz-Signature=6d5499581011cfa97d08482b09438d09897640b4cda60d2c9f222eb939f2d581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YBMUJU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2FsQzr1iTT0d89cVPeL58URC6nfIcWSan%2FsZbkBPl3AIhAL2HkDSOQ9Qzk2av%2Fs7EuW35DQr05YzryK6Uo%2Fjfy13rKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78q3qIKZYFbYWelkq3APwXWm3qnxt2cTlWFxcqjSF18PfRgivIcv3wF7dmHQkdHFpOS787TvyHaTHz7JRDKsfaZyTMAG8OTZxaPdzevFI2ckR5HyfmkiLG7vdUe8BD4MNb8hhTDc%2FIF%2FOYnmwTaH67zRkA7yh4S1bQNdlJX%2B%2B7ZfwlMYGhkJB%2B0mFPKsnLITvAve59nA8sjB171cFi%2FxtRq0zBKMuTzfSQnYuayfxsUuflok9EyZ4ZMbWQBq1KvgY8VFXmJhI0MXRbHeGNMFKaEidyH%2FJGLLVo%2F4Fmv%2F9ceKaQuNfEBzQtE%2FGza2iPoVy4t%2Beu2D7xlSoSYBPpQyAGbGfO1kbQRfdd05lggKgk6mUt1%2F06awXAfz3I%2BioIZzAxE9xCpaqselSjLihXN%2Bvn%2FQsAtU7dW6a%2Fnu7RsYQXIPCuY4LrJ9cLjrfDq0b8suIwuGjDVasqHhXjKyGdoEhOHiAYHix0VUxKCainqCMD0CklClu7ldSo0mPSd4gdX7g1N696xY963R6MQloBMtVxKS5M4n3ZM3XMiouTgBODnqFAxlpd1xPsrR5wq2c7XrHpN6qdtfNyA2yIWnt40TGy1%2B5eY6YbCwEyXsiyd%2FQqBZdzstw%2FV87fqp9dlqol%2BpMNmKJCdhnY7tMLzDfgITDBjqkAUPIsHLly9lC8YOSqOABmosnhWBhY6KHn%2FXatDOi1OC9VgzV%2F9rZ9Tt0LdiVgC2O9smIE2FeezNUoYkNlhyer%2FrHItvZLXL3oFNZgawtmHUf9asXbEmSxcsULwawuUbFJq%2BYpVO0FICjfYqmiGhjSGrH%2FisgO%2F27mSrtgemOEHJaFWCez2q4RHu3L5tuED0w5hJgKELLJFRO%2BfK1Ha6phKOtqC9B&X-Amz-Signature=0c261b53f10f8ff36a32caaeee237358aa2ca4cf91b173e497c8acbf092ce03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
