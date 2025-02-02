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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QVWYBQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCEIjM2yPi1dbj1ERO7BTT0RwQdpdrqiJfU4DVKj2blAiAlXojSdXfV93B59zCsE1oiJ%2BY8aSDKCO3uQCurq8VWByqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFM6bRK11xD%2B57RuEKtwDT7jvpKozmTbGZpcnCDaT6VMxMfa5u5YQ0OVFJfTO12sc2pyHMFYUgf4gYUNYBZtXFxkuR%2B7%2FDZOcfzxRt4A8AlHaFGnWPn%2FgA%2B8o8SXRsQzPR7tdECPT7R7yG95gTcxVvoe0jFp5wj27QTfEm%2BgR8D8Ro4J60IiLmtKkoy6%2FC5pBC%2BKbzGae8XnT89kcWD8nqRhYyhxO90qplj09h0UfRUIFILEcevfQhoZAf0Gm2gfIJr3QWEC0a1mgO%2B3%2FZ45N5%2B5zs%2B9MJVelPN%2F7H5c6DX%2F0awbu9fo3RmPa013JsXnMUMjZ5AQYVNRym2iBynW8nFgC0zuNBXH5j4KeUFcqdUJJJ7QlsQ7JuzPXMA6T7lJ0xuEzVvxOcxLUOyvaguhUiIpWo5ULjAqGzGm5tUtWsOnImRXS%2BAGvoQ589g6mSwIkBQ6KKHZklC%2BIFoxHQtkXePnOl6IeQ%2FfOSYjC0LA1vJobTGiCMGs6nPmj5k2jsDY5sbyIUQwF7r1VUgYFZvw87ru4rvhcQlItUR59xzgEJY6fI3hCnWz4VRCoq4hRIhmuOLYyXqRjSHbI5GR150vHMyORrEaPzP5kqyiLC1uEkj5iPmz24E8GrKM6xaUapmQ5yPn3LA9T6WU96EIwoL39vAY6pgE47TMzEFiZdSXqfs7ElgoIdPMDOhjXh3T8PxtN0enXGX1Hd%2BVgnGjWBn0DGjjoIMhcDNZVwe1wmMUzw%2BMLtYznYaq5dLISOe%2B6%2FN0e6VPK%2Bel34HaXuRgXKW4fthnSjeqa9xtGMRnaFL0yiQNWSFdhTk4fE%2FmJvtlyN9NDKmbSrWk72Fd88nLbaRzJ2ggSgWZha43AlchrFObVh%2Bhvftm8PKOytWrS&X-Amz-Signature=81ce2ee9126336f22273a27e1ed7e77ad0976f9c6b3d2b014415c3fed7690707&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPCXILW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVGbCke%2FOm0m%2Fws%2FWXvU6TTereuQct6QXvyVwWENAZBAiEAgNsWl%2Bi%2FMvvl7%2FApd5bdIvrxnh0fKCamV0cJ4uoAGSoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK4%2Fw1Vk2EDvxFK%2BircA2VtAVnhu5ymN3Og9F8CO82nlg0Z6Lo9ZqaAU1hy8g1abrqUGcgQPBAoG4iHTOc9U%2BkrUBBIyNrX%2FsFA%2FQ8BHdTAWLiOU%2BlAEf3H87hjCvnX8z1icknp4r0N6DWqmdYqMBOeGpxPQRs12g7xS5PCqHLbXVie%2F%2F7brUuQznkj9VpBjsSpw8Vt8SZ05o3NEwoP8gcsB4XCWzLunxA4RDC3jmLGvbpRb%2BfX%2FC95ZxhQYnsxsET4G%2Br76L%2FI2q6aWPj81jDtpX20swG6lpCNIbnsehflnbBlTlKxo38n2FPiOuMZRRPTmmtIRztEUas4utTWlmxxp%2BR6IwlW53Mr4xxgoWCA8tkQwveOQlUvJMSryASrSR%2FcsiJiMzyz1kVYMDLMS7E2aoYaSVWXH3SB%2BuoJfGa4xZtEVgY7IxG8E5jnkt9to4hcoA7q20MeAMjilNjpg5r%2BUq%2FG4qZhr1D0myudf6RLp3sAzmOKHbLlKfas15EOp79eOvZGqGoxQizWOURy8NqcnZ%2FGVjsQXdzPcmgbtMgtBHboJJOjjfFCu%2B%2FKu3%2Foh61Uwb426D%2BwOpr9jImCxMJK1mbdTRbz%2FhYpeIWhPiR4CYEMUQsL81JfLCcHYggDbQaw%2BpDQLNHHybK2MPu6%2FbwGOqUB2i6N609SY3OjpSnk97PfvMLlbMU43UZjRiTRnQyCDkwhFgdVd2fBcgx3dBZYXodm4Su%2FfE%2FRiL%2FHMUizN6BFwOjUAXsiCpJtlf%2BY86WI%2F9bOnc7DuGmvrc8dXJSjAuzsWHKYYxroINnjLwAAULngSByGwWl2L%2BKYv8sOj9ULfoxJYO1TnU1YpGE7q3l4X6W4NRxfs%2FW%2FZ1QHRVhsQp7wNDhzQnvF&X-Amz-Signature=0bfe06ff3356189243363d6c91bcaff323d19a6887c9b6deb5c53d620e6be89a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
