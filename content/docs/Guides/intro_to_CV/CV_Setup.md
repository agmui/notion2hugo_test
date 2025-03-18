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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUPOOOD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFWaYfQKLMxB8eBnQUjwV7vjxbTyXCEMZZTCDskAW2CgAiB3H%2FqgbkBUVyspHaA4ifuxmu5UN3WJc77qThUyj8e1ySr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMggdAS1bHqo7Ae6w4KtwDmbo1aBEeqGPJRCMZmyX3OzDp02%2F0lkd4IjJPfwZuwciAaObUO6HJu6moUWRankadIZoosXn%2FgmaR0vYERQ4E%2FmDYTnGtI5a2FUV%2F0zZjTLgYc3PmXsFZcLgYt2pIxV6OxFfAGCgKRdc%2FkuK89OyNUo6JDBD8l5GIH1y4FlmOVaDGXhdfrce7UxSseJoKl4l80qmqPe4%2F1H4A9zlDLPcWMTRndBTiNKk%2Fk06vQka7CG4%2BCQ%2FJzHyMTuEZyyqlxt2XErYgGsALa5SAUZD18e%2FgY4%2BSo1vPHDn9gJ4UvcB%2BJZhLhmqynBDFzq81nSDqPBXYiK18yI71NPmpTeCMmlDeawXFdsLB1a491SVRbQxBR%2FdYrnWxLlxMV2TLuePosAU8JcM1uxshulk2jZgTO5qu0yeSKMjhWiIxX8cZWpCYmTGaerTzf1PbsNM71xPN8WV0xuGykUUVwFdzOO%2Bqqb%2Fqo43%2FQGTelkNgtCNNAkvke7Tk1azAR22YB4VteFW0UYLjxqmd7ss%2BC%2Fubh0QyBKpFmlBfqEFbUAVs8dTauGinEKVC33VqHNglm6CaC9rXMfygeHbZE2NYDgdscLI3GYdTDlRiGiegeRv5zLBTmuO3f2ZUBigaalPyMPkMxk4wqfbkvgY6pgFFPg%2F5w48YSz8jBYARgMqHAHEtTAVPF0EkC0maW5TNuRd8WmnE%2BdirUT%2FWVPlyWzHhHRtCKPb%2Fxv1WNoFAKqvnMGYV7Q7DgIz22bfDX0W%2F4Znt3rrznjcYpHSt35ocajl3iV9ztkS9Oojos0R8BQnhKkhSff3LqYYM%2B2BnQ83oIwgt5dNrnY0qlk8XgbluXv6WEl6Hkzl%2B0hkoYLiXjNJZMLm%2B%2FQan&X-Amz-Signature=1d8e62bdcff86dbada9a64c9008741554854a9080482e70ae955836319eec3eb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2C42J7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDm3Yn%2BHIbzMBDI0OudsjrdZ3EflDoU0aPeURs0bPQTTwIhAIVFk6MtKkcuOENQ%2FOU98MlENT6cTXlHOhuXGxdAW5HkKv8DCFoQABoMNjM3NDIzMTgzODA1IgxV6Jh99l55sbNVF84q3AMKPYtZfehM%2BYYgKqn%2FT7o3K5rDdYRwKfkVIBMNHuRH21Vg4SdBkmsUsL7OmZxTKB%2FlfBfJ%2Fpjwi%2F3oUSNq5x7x%2F%2FK7jc8W3jTLVk7zDcytwjzoWQ4%2BJM0QAkJuBiVf41gWQV75a4UdvsDnqThGoyvELgchNV38vQFzqHRSEqDix0Wvg2iAdn0a1radSH78bYqEIOUyPYZ94EDpuBuv8iE84OXmb%2B8YB78Z1lMsgINpkV%2FM9LN7l%2F2tKAx5w1%2FQViY7zcQYUD8Q%2Bfm4CuLWKk0adJovD2ywOKBdxHaH1poLhkjAfFlsD0X%2FUFjJFTrwFJE7G2PjxFCY4qN5vQsLwLInpHLWDjAIRgX4qlRU6j49yEuvOheVldStyp7hKeRusp9B%2Fi2ztvBDEs%2BHogBBbkzUlZdLWmzX3k2ksImHEV9U2C445NETg1AmG3Xvm1EyfMpapXdJB8nwXtQ5Q1VHuGRO357u%2BmOO9BDvMn1seylEi0r%2BGVwqJ83zbxIW2QFIBI7MxAKfOg1fr50I2XwYyqPQV33HCA58rKBDxa0Q4zyteGXVaVaozsrsec6RxAp%2F0hv3ArVIoSCFrkS1UofDWqJLTOAT4o8%2BAmDAGU7zeN0n2hPz84%2BsJd9trp5VPDCh9uS%2BBjqkAfT7MfBp7XO9RPgIhElvP2Skw32YgZb8VQz2aDF7kzp47i3jL8MjI03SPtyJiaw%2FpCFHEPlA32IQ5%2Fsb7KEFsZJcn%2FIAfjxDcp8v33LRr84vk72GrkUAPfW7IH76GIvcs6Jv4aTb9hHh1naf1yiwejBlTt3iSOGh9S9ubBhoPK40Xd%2BWTE%2BBymbmU%2FOdSuE6AixjBdF7fEpkS2oy%2F9VmrNY13YEJ&X-Amz-Signature=7d141298b951f02d8912923677902d60f54b11d24164dc8bf133de964e4285d4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
