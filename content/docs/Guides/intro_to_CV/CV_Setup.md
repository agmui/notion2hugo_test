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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHUQ2UE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCtleQhpbCPFSZ0VGSB84fALC11Y6vHtMg0Ujd8spSuzwIhALBxIfyziTeP7CxHD4zMucQiUMtJbHnXb%2Bj1PxaSWNL6KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQF9YqaYSv16EUA7Uq3APwxXmB7hgBfZjFXb89hpo8ElnqBhsXXhp9hmcbM7xDhLI%2BoHoz30AKgWkkdgAUkjG6loJ8Oqsz4TQPPwCKB8133EQeuqGKQEcv0jQk7%2FwyIWa6RHlvniFIqnjPfNy4TirM1QWycaqYpczv8V9xgtRFuauxmJKbC18%2FmYFE33y2N8h57L254ejAHPR2oSdErPosd1qsPK458egdVbE38qO2JN5F4F3VVOD6zYq%2Bxe98dimiIF3sSJrm6e5aTzO3Ookp2FYFv0LqFplklRFIEYmZcx%2BOjhyXpfiRo4YpAi42hU5hE%2F3ip%2FpMigQE9Uj%2B6XMWnFT7H8jl%2F3Y6sKIYBvH5va0s8iMkrZDOOaMXrOHaEGaiG2wm79q%2FVv3EHr8GfsPl8dmun6t41HZMf8co8asf7U37NHiOfJJvkfPXs7DQ2lgIQMFYos%2FXKnTci3kxxoBnshtmEf3FvYV2L3OJfvDnirxNhTJYrGhITKgYeuNOrAnoIt9hlifD7J7UBIyY6n5PnavXA8nU7wJu68fg8ZX0yEMl%2FhOGDp6zvi53%2BlBMjMRaRal59LkB72uUbOCq%2FNy7GsvjlaSQ%2FRI1yKOy1%2Fn9oG7%2F9mIp5tmQsXPTsMfKkoN50JKtZ8eXns4tKjCm6KbCBjqkAShkGfK4gS7gO%2BYarM9b4xo67JdPqfLkx6lUkdL8jnKO%2F2PJUkU2SCaV5AzrdRb2YY3oI0XtWqDp6twyb8mrNfv3Naa3qB9flszqBAb4Gk0FjCOBOaZiBPWUMgOEwsRxHePzUNF7WSM4S8pbFbuD7TK%2BNbP%2BQwittuuzEF%2FcF%2B1urSgl5cU4wDCdc1oxN1Rs%2BcxxIZ7DtjEChhv6sIS2k84oimU%2B&X-Amz-Signature=6de2d3e319aef729b8d5d82f2124ea2a299ce759b473f2470d63610e950dd404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEEAZDY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCulzMIztLmRInnkTX7dYSecQdhX5sr72C2gpBpd6tEXAIgc%2FCtiiE8%2BoM0f8j2Milg%2BkxB6VjgtN%2BCt8HuWswoDV0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXD5kbsyCnncdMEbCrcA9zuL7MiysziBWepO%2FSQq2KbX7QwWc0IRoBufudcxnLyp2xUAtA2a2jy9QpYm%2FynQ%2FBdaUFXTf213cfvhgQhBuc%2BoIofdb4xUCFiCzltRfk0J0IkJDIktGFOd4OgkHgXskBMfy%2B2ozZojLWmeYQugeD5A50aGjolaSBf4Upq6cLI4oPQWVHxr7%2FByZHrUSozfsNGRAZmjJbYUIanCWHjq6DBdXRTMLxM%2FSBVlDU7VS9jsUq%2F%2FX8436lK3p9aeGrhM5e%2B7Lx0%2Flh7%2BT09AbM0H5tQ22UuXrk0DkRiX5hp%2BADnHuk%2BXZpDrySAHxUb%2BxduT%2F2iq2qqhnquM%2F70fov7%2BfRY7rOv6His%2FCSfK8bRUJbz5nN3VeG%2FAR99nOLeF782fs7nu7AeAVqVnFY2wgkle9AkUUlLph8tSjKcI80%2FhHEyO9FAw3Pv5ouW15tBDbVirY5YMjiBxaJvP%2FdcXSbXYvW8qJEkR4C5Z5CRN9XZwhU97ZhCkOBUairtNQYF9KmuiOxAJEcLakrTd16eGPJewLLBtxLvLGkyCXRcUWEGTV9fshifv61FHafO8en%2BgoJpr9PzCAisAMwj1PWoLTQOkRE%2BMNjzcHZqKliq9wzM7g5SBrZylcRTnnxT1YfJMM3npsIGOqUBsEGNFgWrqZ%2BN0kiG8aB72iFkXEMyknJhvZjTQLrZIj%2BtQL311qi%2FbCMEnDup0pQaBHLrvJWagFF3sgNtWpkGH4xTjkteQiUVkpQJVtbuT%2B2xmz%2BX4RtEmeBA%2FETrh4tFaEH6LC%2Bq52b%2FLdpbeVjngx32201k8HFCBHiE5V9EPEsq3MThxKiXDUJbhALWcHLd5k68t0uvUZNsivJzbyIZY2FUpAk9&X-Amz-Signature=5688506e5835e4f2fd11763750e0e2a4b5c520027947d3745ccdcd337b285c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
