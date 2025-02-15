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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S46EY6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyFj6Lf7zziNz%2BmS1PGnf5wAISmVKkHclD2MG2vhYdvgIhAJ4T2ckGE5x%2FhaMEBRr2OwyS8ZtVs0%2BE0WeuJHfArdwMKv8DCDkQABoMNjM3NDIzMTgzODA1Igxyfpiz%2BSWEGfXHugwq3AO1IPlHM%2BvVxo16zYW%2FK6u57%2BP5iTQmbKpsfeub%2BvVZWIbzQAM3J5fk93qOrt4AGyQBqGhW8AR%2F98uOFxTyb0tGgGusLyJw1axnolUCWdVSlDz2Qod8DpLpJbTq%2BLTsgz9KzwZbjdU4DHovtFMT7HoaCe4E%2FXK7cXmT5w4rDrp8jaXd%2Bxy%2Byw3v7utRyPmfutM8szlNr4776TaNDb4KkFzVdYvnv0aUwOMEC3zWbo13lq2U8bSRUhgmwjw9SHW4QZCraPavdmcghSZSvqRszacf7ZLMXl9wmQEEixd74EaVyI1GIAdS0XkeQZVuW7A8F1agWrojDHhGAd6nWzvE%2F3Xqf3qErVYLCXuNH%2FNONzTkFj771OaZVh9fWBlrfwV9gQnItWBSOI4H%2F2O0cLVDue0IIyhFJz0J6%2Fy61W3LUMgvYc2LYPSFrQY8huPo%2BFD0NVe%2Fq0knZFJuY9RDfhkTFRpzuEcVTt280rIbob4lnoIJ9l%2FVIilcPjLfeCQqIXCN6tkD90adB0YLjMAJkF%2Fous1YioEGSkWKVSDaitrGI8ECfMJlyzABheUqF%2Fe2WBMalQTTcLH7zveJ49pb8X0ac6EgayFf3lpf290qu94FuCkUyAUbiEiC1lW3XwL4MzCUtL%2B9BjqkAWrqOMlfKk%2BRS16xz%2FgQE9W%2BRJ4tV%2FB9RV3R5%2F2nyFfmM999Xyw75KOPHnvyGlOqGq7QW009RXqsX8sV5CuJ6mBwRP3qN6Kf7TZbVCIJYaWOoWJWiifqO9DRj7iXOd8RJ8eYUh1Ty%2BswnMsLVPTC0mALDuiqkESPU1SqJIzvugezoorkemFyf24AAuzhBbXItz56HG2yLr%2BQo77nTzkSCamhzucx&X-Amz-Signature=7307ed811283e8b3d97d746b378a89b529122091cbee46c91db650ce7cf8845c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URIZ7ITQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCMuGhPT0F%2F3ky8ySSMNw%2BofFILxkegIboRrfkloVxyCQIhAKB8puxyegzl4o23Gn%2Fz%2B0TB%2FVpELTA%2FSpLNOhyNf54qKv8DCDkQABoMNjM3NDIzMTgzODA1IgwVOZbzcRxTJ7bNA9Aq3AMe1Xc1JBWD%2FY6szQ%2FXePrtNgRkLMWjmDBJf5iYzCdPIzt%2Bqmq4PEpSTaUjNOwrIGSWQzxl3E2BpF188xpf4YZxSdxxAAunQvQmR2LkUdQo458Rzizhiu0Foh2o9GMG7Ap5GgjAvgl%2B5juLviLuPmJEHCKXRJX06pR35F2IaGVO3bF8fSlZ%2BM6QzNbYe7gIcklE2aZDddXmvPjK3vh9wt4eUYJm51mbYUsS%2BV6nA2PXFLV0%2BHAiVtgz73fNrbiGITlvsXaLCAiBrJLwPmfy7wlLkxBIR8wVmzHW3OT%2Btby0ObzXPz56GYCBjo4%2Bunl2PcQylGoPaqO3dv12w8CxTp4iu7BdK2JdyOY%2FS5tmhFTSzPneR18xIJ3JWEHrc8mKXFERN6SKAjWQUvtf%2Fn%2BwA%2BOO7docMK9mW8tBSz4jxl6krXX7DW9DCvD0K%2BHx6IpvxebQ2PCAIEqFkBtmXVCP%2FuOXrPq8etvUMgJpQQ1XIh%2BY%2Fm1bUNxmTE8wgcdr3tVxorFeVBBOtbDKkre9O6tKt61PYyjTlKyZX6PvnajEZFPBXPuVClkYuKYgBJKyosZeUDt3XzN7syb3HAG%2FOPyb3BpkOh9%2Ff9p5%2BQoZaCMxYY%2BBnOYoJCbvOZZKwppYiTC0tL%2B9BjqkAcVo8O%2BpMPVYRBqrMl2H69ojhZoJYV5JQK5wNUmU7stuCif0eparVEH4HxSyl7um6KgPwPTrwDfnZH%2BM4rhyTjOXlVmbLtv3HkG59pjRKfYPwpZhg1mD7my3CAwatza6TlQO7JzWjopnBBdy88MabfuE5ZKce2RBp63ndkJU%2Bm5eWsnBxHXDVDaNcfPmea0Rp4YDTg0Vi2TsAfMmnQisBt2XIeNM&X-Amz-Signature=2e83cf45407d90aeb5001ef0bdc3b76f0f289ede1d6efd0e8a9dbe5c6ea571d4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
