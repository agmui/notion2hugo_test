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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY6W5VK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZQbOtvO5IKrIw6XJ6%2BHMaUu1ilQToE%2F9rjGKg66NNXQIhAI38GZ7kzXn%2BU7kojIvACQ6vzkq%2FZbiWO15JrfxcUuLMKv8DCHcQABoMNjM3NDIzMTgzODA1Igws8QQW5CzAaDOXnqoq3AOf60zjvhI51n3TjXY8nxJm69kmQICEDjAkitXtAKbwr5sIL9AXhmdgenwO1dB1udYkQUNHH7J3kCCBCLoRmWOFvpC6z9Wvfim7m%2BkZCPEB5JBAY9vYyNBttYPSoBFlYhvX%2Fshae7fs7bey3DTOTY7EgJt0jG%2FbYXZ7ZU0gNBrCuyXIriWYzJDixlCKDUNVa5l8c6wCl6UEmmB6pZk5Tburk%2Fy26C%2BKQrQQA78kLgQGdjCvLWvuIYl%2BJuNMe1qv0QfkrZb2rVfg2SNdf9SLHbBYVGvbt8gseaGP0jkhK6abLEU%2FGEm%2BJ6g1XzDx0t8DwQ1X2sAccV1t8kQ7%2Fi86%2Bj3SE9FtvOMWNJaosEGBWB%2BRuiHpYdD4TXxl1dAbFp4Pwop%2FrSeQeq8wkdKguspC1nfSfZXpccAj1i%2F1HDH7OwCnnZOvtlRDiAn1RKJQjoD2fvwDqaPWhN4%2Bb70wgFv79NVLYSGk%2BXDPtf23S4fOv5AakQKnMZbyBDJeZWTTtmdSnTJIsj4%2F1iGQr3abnRGbstqy2p3Sb9IIcan5KXrT4Nz8O5TQFEnRLt9Jxzmmucwc9hxuPg6%2F2qI8MEsXFGxDKy%2BDYSfWrP%2B5me9riGYqlDG6NG2MncIcp2gnRueYUjCy2NS%2FBjqkAU02quJWV4KukzrFRrYtnOg5Y%2B3zZy4MjBCT8SwqNiC9wP715eHWtBijTLbuLLWk09ciWX7%2FczVGMWBaFi2Ld88q7nQKt1qC%2Fi%2BgxIlVVyIpKPWp5oz1Mihd%2Fc2S4MpZJ3Qpz2zeOP0qTrc3rzX17y3Xo8KjgXw%2B1%2Fu7OeADcIsa0O4sIXB4ZjkS%2Bw%2BJqSfQBRXtIexYYPBZpDHBDihMSzN3OVf%2B&X-Amz-Signature=0d7d934701b73df2a4f9f15847274f9a289deb68bc979213450bf9afff477d12&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ET6TJOZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg1cNLIUVCACKK6YcI4s8n1U87zdCp8bfynrMcCu9gfAiABuQVbfZFm5YscRKrdjacM1WM8j%2FhjSFEM%2FbR%2BR0Qnfir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMQI0Qq6cTdEzl0dvZKtwDkG1kpgA35AOKkCKp1FvrtL0Egy2nxirjQbx4Eq1qFFpXvxt94rQwTAMDdQK5iVMctasIKuT2PoGC9mrT6T6HaNsopontTcqOSeR5t%2B51KO6XBN1Q9CYPJekDkemlO4IT3Pp%2BzAHQGwNfgY3fn%2BdGmx6Dv4R4PF4PFvzJ94B0N1pKA7AyBCiRGYk7Cv16kXUWENG3vyUIE6szhCi2kWjW6BnUFSO4U10R%2FBVcBLWabq2JAvwLklMklu3ku0Ssv0lgJrypBjwToOTvpYEygRoyEs%2Fo%2BerPNRE81vOV9WIlFRpMU%2FR9PNYBGSFT%2BkUUrbJYcppAwLAVAlo7cUF91ZpJi5j3Ft3tUqThYDKH3D%2FrT96s%2FYNrYcyIWEykKuQ7qGGbtEkGY9fx7pBG22Fdc%2BeKZ1agIE5Zuh2wnHOvCzf0%2FpjKURdViEmkDqFHBWSGPvWcxgQCuEWETXTA478o7utJwLK8ABVbZr%2FLus9jajE1Rf74YnCJdQox%2F1oo03rLgOjPKPFPFjFanOdyBJoKvoHcI33j%2F8Vqwv2%2FW%2FLcfgVzi7qzfoZFgjlwnk21EgOByvMW3LX9mCCDrCDvlxG5ZgOaaPbvu4Rd%2FBOiQew41g%2FFmBWc%2BRWRd3QU6ccpcFkwzNfUvwY6pgF8Xft6XJaTR5lrC3yRz2XmdQ453UXEBVhH%2BQiMd6OSvc%2B09a7uu1dlfLyQfLh4VVWbvz2nwDOD1wMrO5IY%2Fq7tWc3S00NGVTssMb89FJs%2FUg2dD%2BGB5j4xZO9BOIL83RSrHQ9x3ygPt7Qca8Ys0V74tl0xfS2NzpAEB2LLnAu%2Br1k8%2BYPxpBSavTnkh308vH%2BAwdq4Un9qBtQ83DCCYC80JB19IIZW&X-Amz-Signature=930771d3ae5e13789fe0289a0562e19547e89035fc1b3cfa4878ed4416769128&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
