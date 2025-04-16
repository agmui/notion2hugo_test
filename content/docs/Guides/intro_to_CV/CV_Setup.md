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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SLOR6S%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBi9g%2B9eiMrodAkUskZOysEA7lyNTKoelo7RMx6IiuWEAiBo%2FavoQFX5O9MHYrFJRsLcNkipHda0Rvj4l0r8tYSEfSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM0z5nsENWo6XrDzXBKtwDDc2tz2kubV40Px7wd8gvR6OcU4G%2BEMRTjjkAD5rWcNCNUWxN8BFhUmp7Oz9YkoWErKKZDZVhsScOs0geyCmSnt2bsNhSteYb6Y22pw9PHKe1K1ol2EfiswKlHYGr%2FcNhaoZkvlkud5bcfqslvuLL02RLKrwrTzI5XMnphTEYhJU2pa6Nscg4VX76EkOM52ImXshsoppZ3Sd5HRaPCk3n2mEp8%2FATiTri7%2F4GlOuZJkFmlC7nnoG4nKAP34twZh2qBLfBRzC5LFtCcpcSNUfW136WkK7VZ6ZKCIEbBX0esUxkHlJdIwPQtVtWeO%2FZKRxcCzCsMHaaBpVS054X1EgmFAuY3zejSFRTrhgVYiFg4%2FYoKuC%2FZk%2F%2BL0u5ZAF1JtyBO3qJkNoehk%2FaguxInW3jQavBfmqKMvBGz6zuA5vBgnXVpftCwdAprNHXjSxfjoIipDXVo%2F75e%2BagSJPKVAKEn4HOzybULZ3bppK%2FGkM0SmfcNbXdcGaNfhl0uS0sKs65YXQdBSVCTdaVdK17ZN%2FXAczwcjNsT7jPLacFD2XFXAD9yoyo6I2sb2vU2kts%2BOnJpU9ephoQMvB0Ii1jScyoCJMO02dNFbqVhr3Oy7RGuLOr5%2FLa9DcuqvjjESIwkPf%2FvwY6pgHGH4eS86RfHe0alEIsQlEPvXmWdpIHiykaAFdA4ABlh%2BOBjT4qVJ6LjEDrvfQmK0uo0K6t%2BI8yd5P8qjy71iEepLKRzHLCU9CZdmuQ%2BkG6ESaNy%2BbD6laWaZ0Geocbalzp0%2F0bJl2bwilitQJaMDEcqxPJl4KXdfM%2Fy8lQulipY7XrlSzD0ptuBPHjmmgkJHXWQz3LT8tkEtbSAV5PRTdIGEwfK3PP&X-Amz-Signature=bff5a43e1053958a7d86c48de9ff74b2bebd921b8fc351fd3c07d64df1c29805&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLHPDFP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPMpQ0D9QRuOW%2Fka5Z5mp02qPxTgu1xgnMPLeGuBbRbgIgdakn%2FjZv6lPsXloVny6IPbBVVp7OIkPKZfXN%2Bp7OKEoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPHcUQwW9Bardj2YaircA7NddbLoV6%2BgED7APIgF6dDEVcv3knk%2BNIKokBnsvg6q5ITYCBv80hq8c%2B6bpputT%2Bj3yvf1BWDn%2BigVK4cnsWT47Q0GfgWkl86E2DLdkCbAry9Q4LtRIIrwrtq2Y0MhxkRt3qKtMYVdIoQva1iE2Ct%2FWpnf3Hxpz9ghnTinK9y7tfcJHZNloLXFY1UwprYFVw90hCjWODWZjJk2vrlg%2BhHWeebwqzyj5cSb0YpSN3LxyvNJaoskZ6eIl01MMdKE9bC0VgoKnL9faGi4iQfEpuleYv7OLplvdY4IjapKIFYFJRITH2clyTqYhTd5psSLqNochkP14doQvp3qaw5CWOGEFzCS3URxDCcrJI9FXUuk5UMw02VOqoQkzprZmSSdjjyJfxOFc2zkQLfcdbQakKqDa9c0vGeA247zpmMYg1DYXP%2Fz3NhXJOUQkG2Yb2x21d6d6BKckjTsngiEMOAKD%2FNJR3jp6IUWqTvQJM%2FP8KeRUPAlZKbecqlol2xMS%2FrD19zqCzj%2Blp2EyjF2dqhgeA%2BmyH22ntktyAGM4ygkaQL3P7PLlEM0reeqHGQSLmvwtSV8spJAwEJp501DTsYSiUw%2FDN4Ex9CKNiM0wfSZRh2iiZDK9h8iYjI75oAfMJn3%2F78GOqUBebgdPxiWueRUDtEljuNKnCXMwo2tbwtSYt%2BiIJaRGvUJycV8hRTxw0FZW1K5a8VR0xSKh7tyU72oo5pIY%2F%2FhgFZhx8NMR2a3rNbrs4YPJ0ZOTws58eMMjFkgEQg03ouWdPnot4eXYMq2WjN%2BT2vrUmikeAZBDW9MRMViMyjoY8Kk1HGNTs3i8qJ8vWnTUTv2KQKK2IdQAIXb8K1u8aTkDj5N0AjY&X-Amz-Signature=4cd7bae9192701d3092e1afe4fc58e0225f03228cc9b4c2a6f140cbeda76cb95&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
