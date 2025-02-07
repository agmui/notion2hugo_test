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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLCAY4X%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBlPoMrCgVASoRu8fxkMZpCN3Xm%2Fu0LdIQ727zzAw4jxAiBlkGsLRWKGR5nxtwk0L6uQLS81xU7A2jegiLUUE51w1ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIML2XQsBjY9Zd1LduuKtwDNSbPEGo9AAyvK74i81IvF9%2F88Uf8WXzYjlm%2BuxOPbyR56Gvj%2FugvsoFIiC0LjWn2zv3as1U9ye6tj%2BiIHnGtPX8z3VUjvcwn9DFJGWox%2FN4k5RZVdLsfbpsRih9aAPZHj7CzTJYmpRq6KeGfRfJ93z61J27HCFgDP66Slin%2FTlHUiJehMpmdPBiLAydZvV7il2V8dFAa7Acz9G6M47x9OaEQ0v01nsSQ9sDufUQE4gmfuXhFvTmM0zcuWvdj39kjeQQOz9D73nNhi%2F8vij3rPNYEAiLc3kRc5SshbCvAsG0UUQuygkVZVJ0knmE8eFhWQVDYu2JCoUD3irF3wpSP%2BzyC%2BJVKguMXIn61PErEBP3dBLnq2dZHGiAhZfmHLNZz8Ux0mq2zTzdwuBR3mFN%2BODbEmEqcABZRmHux0lM1AErzCuLBCZR5V7TekuUPLOf1XwjmVZVvIgBar8ZcGAGLeBRusP37TTDY9MgeFJKsZH0Oi6pb8RTysMG6lPGs5tP%2BNfFbl7S6BeRJ2WEd%2BS7%2BJQVuwQaZV9R%2ByPoF79bSpuqkad%2BPSwHFLjo41GANdoTAHYL8GtBnBCVGJXOLiZD7m%2B%2F1Gg2pHfcAfU%2BCI4gI%2FCfB%2BGbW7RThVTOGS6cw4%2FqWvQY6pgHWUb86qA5C73t8%2F41nG0ukXUXoG6%2FqrYchZmIL1gV16u9QncekA3R9Y69gmx58i65MtnVqMh1yxQyWXSeJxP8QzTbdCy9uXW6eI0nARlnAo78OnAqgM1WVAPRhHYYkOd5SG6o9cDx4r7Lysz1ioQL2DEIm%2Brb0wlFQ9RTJ%2F%2BqWPYVWfgpqoPDkiVTvZD3P71J1UP6ElNq1zNLI1KA0CROGcJGsdDUN&X-Amz-Signature=9f3c8334aa9d3e6262f7c9d4172819ce28281b6f7bdc816a35175b2bebd8b344&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROFBUX4O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICmCfmcy13B%2BVUzSRSbwica946jhWtNkDaBIVSuujMxTAiACb9Fv8FAGpXTVjG3jzAxLmHsPKKBtMUFXwAyS0PoLoCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMD458IGRwIkdIg3KBKtwDP%2BP6tTByuGjj3UDRi6wPadHuaMX4N5wG5gIDwIs5WGRBWtJy%2BrSAsGoJpaPbwdYKBSFRxuBo%2FgwrsbPKiAIwUXwsYZ7Hrcns5nzQ5rCeN7aR%2BwoH9lpD%2BvRrx8n%2FIhht2KRzMt2RI%2B%2BvR%2F9fgDY0XjWMizqO%2BrxGymiDWNQ%2Fwu9tSoj9%2Fk4RugHAyI9uLimTm6j5HThvT8k3mJwXDKcgKquMULQkRh4mDnllhg5ENMe01VaN9Bi2xS0YwfpC6IavfTCp7GXKsSBO6lvlsIHvOAo2Dxh0qqRpgUSavQMpEPo684lMOn7OBP%2Fl%2BEU6nmCiF1ijJFC4uX%2BY841MHIyXhDrEVQhiGqHuQnA%2FRJKna4ogEb6pIRl3EFSMvnfo%2F32n0nA3ri1tBRXDT189Q6RHzr6ivtYzraEHMqZuk%2F3AsxQgPXwU63pw1MgQVKt3QT9yDe%2BgUEL%2FSLO6kC29BTO9%2F3qRL5AerF7FnUF%2Bj3rTXXJrL%2FCbRJulo1DQduaMpMt3jj4Jz66ZkaeLN665T0pwdmeDs5hNbQpRwwzbRTIt%2F9G9rNURGjYyT8QeRPkgJc6WhkCsa5FBF5%2FPeqnmFhKHwqBbZPC51KSiRtsFCIzFatysw8OeSBT8f9x2V%2BEwsPCXvQY6pgHa0dtwgdcys%2BAJGCXRw6DUdrQedYIXieHhCyzf6VRn%2BePCD7GPJBTRuXV%2FQc9VUfGVSBGAB4XlpuctYgImOa8CeLPY08ZAGFGTOD3b6FNyIB7op5hYNEPsyC%2Bj2ij3s1sXZRP8Pc9UxeI3lPvdl%2FyJW6J%2FpPsQ14NDvRxDPIHgpYAgxybd2gO5vhnXqmsIMejeTeMAbnlt99QNyoEfD%2FIUIpNSdQjI&X-Amz-Signature=37345888cbc1815e19757d92a9468b3bdfe37be6ba87aabeae66de32753b94e5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
