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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2S34TLM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEtDlER6nX28tW03ndQbG73GLrFkYnZJQzT9EB18uBRIAiBx6plDaR97IBaHzfcqhhgi0GXMb0zJTvRmoVNj%2F8isECr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMOzFRPcw3oDO3UB4%2BKtwDJjo7xV9leIXLkeBPLhRm4qzoG6GJjkCi6Rq%2Bqr9cmzEgHfbDnLtTPQYx8IZdURX3FZVpjon%2BQjIq5D2Pn4j3aPO%2B1GRlp%2F1m5LfU38LXJob3QG0O8HGcldPgW5CB6w%2B6OAoUlys12sN45YZIxAWX%2BzRbhJV7b9pVZn6aQtmkXtlLByXeahjOAEbgohT65IJhyZq8tdOoqSAZzfDH7JSZYD80IXwQfVhIOGi%2B0ixAeL%2F3V1cKT2klJ2ZkVBKadzM%2BxwblN1F4WENWU%2BLwSFPGk7ozbY%2Bp%2BVg26T0tEFKKGUoRPfjp8bG5uTL7lHvoP6mseraAygbFHSQJM%2FAshY1YWmpxsNIU%2B0FemlalorFl3P4MKaMoZJNxyf%2FpGa1JAFbYHBNwSWwz901SOZnsgBJjryg2Lyv3ua92xXC9D68%2Bp2lIJGXlEX1M52sOKpABjZUHioKaOdRBGGI5yEdZR%2FPXF3wEUYpOd7v%2Be9m6DRxXEK6d1Ngmj%2Foy4QavcQU5k0XVSxEz6ON8R5fXDSFai1SSNpfDr9j1bw1HxrOWWxSK1VRfNf0pt6j7IVF3cCfbIHp5%2B%2Blqp7JT3RAW%2BnlyUpmWjdsWVh%2Bl1UxIK03ApmpZSgGY4CGaGO0Zlq2XUYkw0tzLwQY6pgHphWlx%2BvskeD%2FS72Bg%2BQbew0Z0aTwHQt2l9v8WnLW2CJso3Q7tDDuslRXRrEqQ5ev5%2FM9%2Fcm0FvRU2dt%2BsQz6IDvdJKxV9l8dsLv9XMeB%2BkmCb9gARkxojRx4SFyzbWwDoqnj52ecwZUQxkoufgCZJ8JawNzu1Ey27x4ajYnmIC9GAlXDELrshdV57TZ4ZwQoWRtKQKxAzdWWBwXKHBd7%2F1WCLZGxF&X-Amz-Signature=9911653c4cd1736b9dfda49a413988754787d249137a48ac4f2d7193c49d4ce3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOBAH3E%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIE7rk9IhjbUFuQfQn5Jz4MOtiLv%2BfyBS220%2BSQDEaInlAiEAzeT%2BzJ8cjjx6fMMgHA6PD43uDROUA4Gt40pwRC1oyhEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGMA207z2RZ1oLtgKircA5akQKbNMcJDMell8RXZGUzDwNyhCiYK51ttMTvHaQDzMyiBtU6PvEIQKDymcPAwW4jW6DFrA4pqs2u45zrqxMgsToQnw%2F%2FHWINEt9uGYelTlc3m8V6b6%2BEp7avSeKLWhtQbH34lqsR9OXT7x7h0xaEmGq06L9%2BprsKwCXbD%2FqbyBRx8yiFpgdU63ErS9yyUZy%2B9pnfhqe1BdH5EHEar2ncB1wLqKh%2Fb264Spi6Lq00uFrHowH2tHSFu3Nlcy4V2bZ0Cc92z5oB66f%2F6bTC8j6MXciSUU%2BtTZRyjtO9nh7WxQ26Za3Dw16uCFdBG%2FHl%2Bm5ZRBFOxJPH5KqwaIJvsb4MkvB4SlIlAQLhV58QzL5NOwDd%2FCm2waxcPcdlRtoTqXS%2B2KoKKGsUeaN1KjNUSRIjipQ1obc%2FvdmGLyeste1b3RNka52Hd5jOZfYybGarapWerMFfmutK8n9RGPpMQARjKyeqvW23krRA4Gr7G8Tk32SXLn7WTPF9FSX1e89yRZuCnXOi0AeSYj2IOOq8mHQkcVQwhDA7SccwU8uO9ZKJGcIEtRzLpMGmjGLbdROCnPlZgDvrK%2FAFp7LWsRImWu5O4sGg2tYpW7o3kJJ%2BKwb4O7Y5zxFfChFytFZKJMMbZysEGOqUBHx%2Br%2FQ8KxWqk9qPzdPH90qv5yy2BSzb2dLCTpn8vI6mv4Gf8PHKYnehIGMn0HBGaQHRYf0u0hsWXGjVHqGAxn0AwnxQH%2Fo3okoX8QeRSqsnbZKh3xOAIruXdQuy5ikB0VacmXcNiZp1BiMkTvPuX15reXH8gWx%2Bw4M0W%2FEPe4%2FeW0UwG5kvyS3VlTI6%2F7w32AxEocvLiVj4ZGeeNtWQEU2REUX0L&X-Amz-Signature=a190a7aa913e3e9f0451bea2434e2e4ffda8b283e1e14ab66eb1e221ba55948a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
