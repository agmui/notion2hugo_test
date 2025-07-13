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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PQK6BTD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH2ykKnOGCYl1RVAOcVi3DLX68P3LuS583AosfGLr0AkCIG6A4DRAjbEmeoV5tqHvVfy3Eu5K3dDGm%2BOwfvVMADwSKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjh0jhWOzs8xAlhHwq3AOuk1%2B5flj2xdaw2SjieCZVTooN55a%2Fb8Qf4w0kTCYH5AzASA362fMXWYLf1%2BxsLpUQQ3jk10pgLFJnVRmlaMwsN2mUroco2caaxv4YYl3ZZI1nfMu%2BDfs8X076styAhBoAWFHq3TWxzgMS6UIl4kJHM0Am2XYh%2FjfJn2IQvw8PfUtdwONw02p9DIOIsplRnh7hcaK5vvj2%2F3xjGL1%2BZgkuRz92z9e5A7zUgtopT1iPtULNngFO2kaYoMgzFUCXJuI%2BOwJpShvN1%2BqpdF5hwkrHw%2Bc6RLSgYg%2Bl8FRhlKOK5CRjrd%2Fts3K03Bm0sHGgZ9IwvVI7ynpBBnl8dRqFO0O%2BLGquaDz5gVhUts53L67BmyjiuDvhYu%2BAAs7EayHEXVlw8P2%2BEvLE%2F6by3vXe12%2FB2pDoNHeNcd7dZHPeJArgx8nytDEbd1njC6QigmsESsRNUYrx5ukR17YFvcGmv7DWwoKZvB3GbXWGCMNDKHSSp1zEuW3FxyDjU85P70WZ1uqPSjgZW5H08Hs9t98FMLwLM0B3T%2BV3lWlN%2FF2hwqHxOOi9eX1WN51AaoM8vMVrch8zKHSOKME5wWZ5nj1uAkmnVH%2BXyfuSf3TCtBgU6f%2Fdw3Cc3BJ3sHqvbAwAITCD2czDBjqnAear8QFZXOZMM6Tdef2w%2B7SNXVx9mm4fyriH5uLrZlJAtw7hf2Bt1J62SHzTrvI%2FnhYX6jYcAaedjwHdaZUrgADpHMLYAcYXRsYUmZyUzZTgF2DdmnVNOYylUb9111G9GZ5gMBpudYl8Xq0%2FzopogM6evmGGT%2FYaDkrEqoFcn0XO%2BJO7PxbJ77UOPmRNiIRCCjgAF5tghbxVsR6rGix33jTfx4hUp21W&X-Amz-Signature=560695aa67b96a5e4eeef6d4a22f4a6d481075ec42c2d39e6faf0853a1e8eefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXJ2344%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwxjQfjXyCsI6bOtupgzcyL%2BO65Kf9NBqAO%2BSk0D7mCAiAJgtHOnDBaSr2kwmkqoVmPapdKaeMvMX8mx1sba3NSFiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYzaYeDMalCG4qSndKtwD%2BL95LKo65TnWjcQ3rfKBERPwZSR%2BFN%2BpX%2BSc42Uqw4rCVbvZIM%2FIMVpSAj2Y8sAgLUGAq%2Fgh6zMPKVC%2FLOGUjKomdHcEPwBt1oT4Bm4yO2SFZJuWO6eT650RwxOy%2FAhpF4CWCIMv3wSh4aTPf50iTuCVx6qb%2FAG9lYPbJkARVfPI9F0uZMM5tETBGdVOkm07JDhBdvpZCWg6axw2uQdCTR9Rr87jt7S0RpNlbxD6yuHviJDJHVAr2Mb8aYhcJ0%2BkuD8%2FjQNbF5U6CJM99SH7%2Fs%2F8JL4fkvlqyGQmIp6tIPoskMYcqMI6lUo9sRWEFopuu%2BHBtc3B4wzQI%2Fvt1E5j8BBimwx8U%2Fu6mpoMpdzGGxSvhSOHwUOBHVN6WgmKb0i9I2kw9n%2BMUJa1Jy1W1IaMMQmpFgpUvYQp0HL3yfHhrsgtOiEMzgm%2BJuZkd3kyGwYhHWWxl9B%2F0ZftmkrJY7mj5QfDPjJQln%2Bvx6DObifd7XWRY%2Fw0xGZCh40MW%2Bq6ttiQ4PiYIWhwubt9TbLp0S%2BL36Ngzb5Y4jnztWjOxCvI9ayxR2BLxxG7TLh%2FQ%2Fz7m5xUapmT8A4SejdzsE1m%2B38liTYNCfbGk7SQizx%2FGJk5ogIQUslQTVjy6zteLSUwh9nMwwY6pgFiFGFmJO1v7%2F73aeYqzNXrbKIvNIzUEfp6IWHCq6v3LI4zqWLgUA2F5VnK3fWIKdx4tDLXRjf9IOHqQMNvH899JfJAofX43%2FdUH%2FoWilsQ82clsuHOmInndOTnDYOEl0IM0NnEXJr3FAC7WvoMr7VfH6rbGqzXyyEXwnq9fmpAFXnXYkBlT2ayuq%2FydTUjXprpAl3DOIjNFTRmNxW8nPhhob1%2B27PN&X-Amz-Signature=07b110330201a5913f5520e9e36d4264b4dc8ad009709bc321c1aaf8cdab9da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
