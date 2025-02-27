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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL6Z5SPJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAOGMunfxuIVftKzU9CW7z8mEOxhjNsiHy8OCRVW59YeAiEAkKdqZk96UWifKdK1%2FUDE6Z2j%2Fn2OEKhSZ5bCiUWxTkMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCP9L4dLwB6tAoefEircA8IKCQxFbRWnij1l9yzID%2FPLJAKegBrmEdLo04Xpi2nWa5VpUKI9kkHRqxYzPtkpripYJnhOIBU%2BVzfieGcx3XkKG3C%2BV7lqfUjzwg%2FheSRglWOSR5z6XMe0XAef5fl%2BMAshIPj4mQ3ADi08O%2BFVDekLC2DPqjDWPhvEdjNaN%2BDZVAixNmvYiOv5FBFqu6k8zM3Ekulfz1MRxA9OGkliAzl2EC6mz5Rzu02tP30l7v2ekVfdUWe6ATAV90YbmX6ksIzt%2F%2FlJVULJpYuxc9Wf%2BMfJ0T2NK90tkO849vPExgpSV2Jgngy0T%2FibHnfH6lXNzbYw%2FBYYA5Qgik5oBhupjSJtvX5ur6rH%2Fzb6%2BcsLXIullhG6nWEyKOxxPsbPORTrljPyFog88UvYVIPgqjA9%2BEref5SiG7zWHg8KHvjccoxGCEi6t1e7qae%2B2Qu0c8tyz13nv55DeINfL5iEVuUgvVSbl8gnMJiYSQ1qaFsmVDUoPbWa17cz6fvy5lrZayI29j8P3cP7M%2FrwalmaIRP%2FUDG5O4MVo2SdcUHPCrE3MjDvUkJlBBl5h8oZ26m3nU1drlsNEM6zh%2BzFrM7UhMqqEksY1wWVpaB4dvtTeWqRsXwjUKPVHmSOpZT%2FCjuKMJf2%2Fr0GOqUBbyYuYpAXYm%2BFqxKetH4W8x86v69ZtyDURrETqBF0eq5JuBWtsh6mLI6dhXndy8X2HsT5KeGeI5%2FvcG6jL131StEQgezcaITLluRWA6WLWXR9unL%2BGM%2FIllyNTaFofAZ2CZj0qfx1UBVCMdl3xjALe35H5Lc0RrxBZvb%2FkIty4r8hwzpT8yrrm0GK06Oc2yAByj4%2BblRtrvK0%2Fh0hF6I3eQLYkdzH&X-Amz-Signature=e9168c70536a9ef134078089c744471a67772f3d247b82bf4620e0cc6638b06f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHBJRTV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGKWpz%2B2Pm5dB%2FYPW3o%2BkKfjcE9OhPh3a%2F0R9hNCTXxBAiEA2WSksR%2Fy9duSvROB4O0wIyNBZgkdnrC8ET3hMR7xr2Iq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBc%2B6%2FKaiPZwYinihSrcA4ZGC0NjX4R2PxcBAyRh%2Fcrb39T3AmZ%2BxWJAmFOW0cY0OV2LDNDt6BPnw8fGcjjo%2BReg4mZF15rcSCXW9KOQFc0PlArH6xvD3734rhH%2B%2Fy7QJTjgKzf0TwvQ5JXTeDXYeNB3OLuJ%2FKq%2FZxDJxf%2FjpZYV707r1r2VkAI78Kpl4FT9R8bDdJT%2BKigiWB1Tkf1k88apezIELETrRACOgyRwx90LI8FBgsjj7pyybGuMmz1KxeFWq7WtJJXYqD4LcgrshXOz4d03ZMAaBHH0Fg9SYBYbjQ3DBtml0vzhL9KFNgkogyUN9i8Y1KVKaPCMBr3B6Erf2YOQfl4XBl4qdgsFP%2BHI99qlh%2BMWNwIN9IivJr%2FUbeLhWiRzvb0h1lg7uHGodXzaEcSU2DCSSaRgXRJd2LSO7i4MhrBk6vUbreVIZwr%2Fwbu7iE8z0%2B%2Bky0ivQjO3ZzgY6tDKnXXTwrR0OpAsI0KHTl%2BxDMECVGKwt4YApkBJOIvHuW2XdYZNFRS4xzZbpnAXBcQQgM98YnOQ38W31IWbpJ8UquELgH5b28tr7j%2FCbHe5z4b%2BTKycDG8tLsExO83Q6XK%2B%2FcpriXvBCgJ%2Bca2oNb0DsPQmzLAqM5Q5GEjKLvzTy6RI%2FgFKnTDcMIb2%2Fr0GOqUB5PVoXRIf%2FLth1DnixHZ5PsZV%2Bqp17zdKoZMrsWI5nc1JKozXOeggKpyrthmlKAY60hgIOqql5gOidYsOVgfghDnzNrYfed4JMOLiX16DO6b3KWH4VA0%2B%2Btmu0J1QtcFAD1CxRyc3LSzJ314HzZa80Pi9zZv8R8q%2FeEGoZzi2nspAsHPYJmiStF%2FTX8k6ittxLxJAkQuzSo2wXdylNKGCgs%2BwdRr4&X-Amz-Signature=c43e399fa6a781f54553d9f73785a8f7b04626493bc043fda205aed0c5621112&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
