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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I37V3P2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDUMtFaNsaDBUOwbBodc3QrCmjd8x3P21MuvT1%2Bl7IR%2BgIhALTLFWPNi2c0Hk7mbJQwwqswpPWVW%2FeEG6JZcjWh7QwnKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw66900ZmJbskvENIQq3AORe4RvoJvBS7dpnYLvbSnO7R4JrZTRrMw%2BM3KS5PlW%2F23%2F3LAWIcUxONWbw8vN5usONw3VPBjdiX4exc47Hyvl6TPvgrul8onaKzPbZsy1PqM6KuWhIp9YrhxNRSMzRXFgwxkTGdav7nqCrklsRkxr4vsKR8AEuuplqofZ5J9EwdV%2BITE3Oy%2BW4ZojPVKeY3Y7Ug5Fs4Npd6d3PvL0w6LLPA%2BKJMIupmcHZ8mMP2O0cSEI5AkiC2rLjWsXyNg4eKepdzVirAayVIRL5YUlk81Fv4Ivg11tWhCn2e6omjb7evff5yQn6mStLiIUIS2bpuy3ldmWmYWelrvhyN%2BPsxrL2erpEW%2Ba9PHCXkOv8hSFptuC9%2FdQPkKc9j%2FPzmI%2BCWuK7oLXHtehWIYit7v2TqVvM54xiNpzX%2BkCwhWmc9UAGm89Pxyn5uRzJ3ENmL%2BF8pJzYptD8xWCXklAKZIHCyxXidtOSiUhXS5CGioH7Iokc5KuM8thpSN0ZUAtnqpn7YB8u2FKv5kmuhyCCF3NBVQ4RLpbcXOKW6JlGCAKhfHeXuxs9PbxrDofRXvsPARWaL4VmYqYRMlhyLN8Yg6GsXdOpjQ2xUkZoy%2FTfxKalsTesYJEm7Fzpq8fRxqyBzC%2F167CBjqkAS%2B4NlHT3krBQGEDXp4wRkdIVpPulV6OsK0WxqV9DJR%2Byl9oESnITDihBW5m509wE%2FJuIET9fg71KvoFdAo%2Fqn5a9h6p7g2rBoP1lUey0QXq0bIY0VMdngCU2k8zvrHJjv6UyHtc%2BuNdbFe3XppFieKQOMpzoW2ZlZLAiNITvlklfGO4NCsyO3iWQ%2FUKIc7rqjKXNmC%2FkKdK1t2qNp8QX3tUKiJ1&X-Amz-Signature=eb88e577a231babd3eed159fcdb58b2aa90443c896d4476e545d607b57eb3566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZRMT2PL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD6WAwU7SWrLIug3xe8eiKZ3qOp5Hm259nMXCAzlcbwcwIhAN8hW%2BLrT1YsomrEvHIyD9rXdogQnJHVgFbr%2Bj3XlFZpKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW7KfgmGUH1sBp3uEq3AMg03V1cPSl327rjadRl8YKUOI5TSZd85PBIYUKosNKcP1cBhs3HfcexAXkZy7MY2nawZ8jeai5G8KvDE2EiNnkXpB4YR84h5e37z2zFPWloLWXJ3PgsiRJZc1Uz12lRVPZBkebCBZH%2BLl9HvhtF2dU7wrWcO%2BwvcL3867sHGAvVBVTBMt7%2FtpmZXOEkPbU7YzJ2BRGPadcrYa1faQuAt9hJ0ZyX7hUuWTw6uC53zB4wRm26%2BLJ8vpHuGDV27x%2F%2F0y2gfU2P1WCT%2FFtaMzEz9s5Y%2Fwbk%2F%2BhOVk4yen0dppY%2FfmmpENo4S8hL1ZlFm2DvvgmN1qFGOGt%2BybGIe2nexdC11%2FjL7MJNL328xfj9p2DWivcN8ISXuHldfh%2FvcxU4dH0StSLoCBq18R7ulnUVkPuWBi4Aj0LDQrxpSk45iHqK0DkLze1c%2FY2EID%2BgBiHjgLsbEImSaR1INHT7Y64ot2GpwlUvawIN9iYiS5smibd1JgidqZXNdVO1JEP%2BU4q8evYPW1Uy2ZGy1628rcddR8ohlWr0oVXTQvl83dncSAjQLirMhtmIeec3qAHThixuyRf%2FliGZm25YQg0sV8ONSohIbZrzyJABN0yBX8gbD7wieOtzaJCeQiUZp9KljDItq7CBjqkAer99tmoU66iB%2F0MT6n0x34CABZz4uhBKCkoekGIxG4F3qoBW33dDOpnvglQDme%2Fog%2F%2BzpivqBMn8FzZnKSb%2FeEUJX8uJzus%2FeWtf8VunT9RBa56TkAu9cScPhSC6yZPJ8TYRiAzEJjZxYvEPTngcoY59OG0ysFsMxP2MJHtvdjHeUVHq51GFX%2Fvwed7sQ3Vr4r%2FStAbYsDQMWIp5%2BFdrVwqqj1l&X-Amz-Signature=4747c46153f42842e83f53d43749b24d5f2818523d01e3a0d141878e7b4d81c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
