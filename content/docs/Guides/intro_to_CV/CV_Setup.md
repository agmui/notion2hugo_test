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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5TRDN6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIERrdvZoDJBrUGP83zJwfx6BjLylwXnRacyhKwvbSn%2BzAiBCh%2B42OkeMKMvaWHoYbOXWhbe5M%2F70J5GZwl5FOQAuQCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM2CJOGLZKSvpP160eKtwDc89MgFrE3kT9lt8a5P%2BSMJ5V56tqhqstAmEgJWdKVdLdF6377P9g5OCzmhaQrkPGI8VkH4%2BdB37NxMI6YnwN3ouEDmBuXlESl5PcNjqMe80wlUEmZwrt3Ax5eKvPpC3R9oeBscwS58ZBKnpZxAf%2BGM3PLzckl9ivqCaDH1k8oyMmSMgUvYZthtuRWvLcPZB9uZkL%2FNKthcmawDmyQbsxooVxu1ofyru84oT%2FlN3d0Qs40JAJiYIwVwwcYYhNE7sOJS%2FjTOtpFKVG51Tlb7cre9RmHiPZU3xbeqpefWZamAzGNFm3j63k7%2FG8equgkuBpqF1xBoa2Jh5urXn6kC6A%2Frf778bdQqyj1lGTIQagB2F4tgcIKj0stiFE1lrF%2F0DMFYQ5MDCyY%2B92M7VEGJ1IZL8%2B4ES%2BIslfGz4Hq%2BdJ%2Fa5PlwRP%2F8QtevGiMD8pmTjAeItllm1LVFFbygtdID%2BpbZSD6dDHinhKkfP6EUQQ3Nzvx17YkLxQGzoq%2FcqhhF%2FjR5MK2s0e4hjxHQVMceUbB60fmNKwY5u5L69FOwDHDYxk1Li4KF6VGSsrHLuT5XBZJ8n4OaRk3l6pEbdTei9ge81qEnaWPjMInh2Z%2Fy7nlPQsvqotFq%2Bp1e7jWxMw9NTXwwY6pgH1Vpvd%2BrnA7R%2FeVV0LTELThzsC5b0legKlzwZPGarnB1HANx3BP3yAbPWJyM3fjTw0mB3bmKUnPJ9mvFnVMQY4%2B3ECpf1ZWdNHD9m9kVlP1ZAa0ZD7o9Ld%2FQ8ez7o2xhig8vj3vMKXKO3lJYg7jvRqvUUpXy6M0hVsUwRuUR%2BHIxgoa0U7Rjakby91%2F%2BeOJwss%2FQXfCvbIpnNSJzIR%2FWCT6PqUNOl4&X-Amz-Signature=ac0c7ce1a723820d01afce0827a0cbd00564e49203837385cdf4602634c597e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEKPHGC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIDZGhaODI40M%2FUE%2BzwOiC0rDm3dDoN8Sgx0HDr%2BzZJkLAiEA0HuBXGwVRN%2Bb4WWIyrzG%2BU2%2BLJdcqVp3GuiPiKphmwkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFpK2fgQex0ES9tE%2BircAyZzQaTyPPz1%2BfvvYlJ0OpsBvPUloNWkR65nJ8mqJnRh0ro%2BG69OxRDF%2FjaEpaB2gTGPvzH0cnfdsAA%2FfSC5UrjRw%2FvROXpizsg4AVLv6Vw%2FER0QAj%2FhvRp%2B6MgwpNlu8VHi%2FxLAMV1gB041q%2BGforNKicD9mf0PsanggZky0MQofihSbOtNIshJSMolQkLkFOW7NemBBW%2Bmq8eNgMlAXZmM4AkyLMoBnHQO%2B8H9rKEADfqYK2xUbQEOB%2FpWNT1PkwkxyIS8M%2BuRXKEz6rPoXnExyVq0afIeKTf7eHe04iOmbdJWQtZhFt0RyvvCoonwIpBCgQjS%2B816yeXpBuNog5wMyHpzFUpWylqAvOHNCA2VR7Hj5YgoJpbZ2aNEy2m0jPIgzlEuGkrKEy%2BpzKe1WNtO08nOkwT5w1hqRNGyQG0BEn8MBTSb%2FPZuH1W6AOkr6sYGXpQchAZmmZlEYC0pYyT9P%2Bze2nPwRUBa3LS26tZQw%2BWHi%2BSwpN%2BRhPce0zbCz%2FRgIrcJk9gvF0iph2L7RR8tU2Txzb5FR%2BDTfdG4TFwt5R4%2BwOuVr0%2Fu6d8JU2ibXaLprP8YJHVGIomrWHUAVPC7fVLdhuOoQO12sGjfZXSi1rWzrJ85ssdnO3%2FpMJjV18MGOqUBKKMvprsKNmHpoFqvToznJ8ZmHdVkqSLIGwB%2BMihewtE3NtQ0LMJs8%2Fp0X5OFgMqLCgQCQg%2BUpKu0HqxviicZpaFamkcO419t6ITFMisFtlcKjPuVuCt1SIuACmcsHIkzsUFDFnYVZYXU1L6Od3z8Af4Y84IJ%2BiACrXvu3QBkWn%2B0xEJlG%2FOa0jDG%2BXGfGAbjAHSgPYTcpN5uaUoc4gli3chx2Tju&X-Amz-Signature=6966b6a39d249a2efc68385ec50245827dfd55b617b358f256e0730e77a1d8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
