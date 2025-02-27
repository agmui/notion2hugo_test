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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZRAQSA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDJeRtWVBV9NrEdLH13JGdG0Ty5D6CSoUx8Fce16FVQDgIhAMg5TgnKZAtI1GnVlB%2BhWEtFmaas0e6htI7VhI%2FvBuaRKv8DCG4QABoMNjM3NDIzMTgzODA1Igw1DgEnymfDu4n4o6Yq3AMCtzg9JsqnY7BVGWIZzicn%2BFjI39s2G3l%2BBSfTAGNLtPxE2iQn8e1phbvEPqKlN5F2QB6cRzwJhGCfd5mfIK%2F28WEVC%2BY9JRFH1SeWXQGM4jxsGe6Tppz0bvOnhZ0hLGu544PVoBgUYQ8fUDPzlNElju1pq5d8JCBEc42EWwrm0Rxm%2BN%2FDF9UQa5siiZtBNR%2FymLZaRVDReTIbRN8dfIEZ%2FUQxcVxzqzhuMLi%2FYLcx4wg6iTiM%2FV4PbT2fhFgLy7QsAjm5OMnlBCMdsSb90dxrf12i8XwqcshgtXNw%2BaVxVPYn5v3ZMd3WjnCrBeWFPJMyEvEI3J4rrWaYUM1nNYmGJ%2BUgUFfdGw12jx41Pxt54TN0CTnR%2BYdMwzb4VrB%2BJLPDc9%2B%2BUbyQkFqot8d188bnnxfguPS4xeI%2FgAN0E9mf17bOTipoDAa4Cugy00AGdwcwJxw2kf%2FRguEjceX2yYjJm2bYBP2bsifgjyfjuzfO1gAPIx%2FYobOy1Em%2BIHg4OKy%2Bxw%2BNRRhS4axWoc84oQur%2FTEvzH6qy2bfau%2Fs%2BQklgZNbAe4UZkdMiew3Uvca0jDD%2FjYKVS7T8a%2BW%2FnhNxy4Y6bzb0WahlE6vzQ5FMTaL6HhLGDoDkvsCWRB%2BpzC97f%2B9BjqkAdd2ps6vF%2BqgYpoKWQ%2BfRxIeSaGNqAaGkfSbaouiuxANsK2Fqbmu9VunT7Rwhf1L3KTIyGZerXpaKMrmDbhwbXn6HXmKO0TP15XaWDYboOZT6cXbiWTNMtLjIn8UQ2NupsD5IlLlUaXBIqls0Dkz3p7tW%2Bcg6qLXia82keCRs%2FdPNXodRfE3lJAOShvXqoi8UIvSuDeh3O6PNe3JA%2F%2B8u%2BAiw9LR&X-Amz-Signature=10930dcf2996eff92625f44dd8f49a592e203bd6642449e3cbf7ab6c3da620c8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C56O4BW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIARhJuKwLLeeVaKv%2FhVfCMiZq5xQUq5RrEXSA0rLD8EyAiEAgTdgLdTDlvt0hRTYeE0GgHPVZQ8NSdnyphb0A%2BEFapwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOcMAO9Dtzjv%2FCwwlSrcAxy0nTn%2FTE%2F2ey1tc%2B8dlsQOOzbc9hRYZuRJTM%2BGR7tH5Jnb5XVzk87UgMnJiyqOHCj22wUtBBJbGOHnLnyiD4puEpEyA%2BhQI6JlTQKqjk76jRSRNGiUGbu6iRn2fD6tn5yPEH%2F86LT84wlP9mg1GFRkE00v4xmhWUJiiJouI%2BpGEl3RNNirZVW8eVSKT%2FW7ueZ%2BEQ4%2BgcbZicUlX%2B9tV9%2FdW63b%2B7lgOgCqNxi%2FHR3v5xB5asqk%2F7W38fFsnK6JKlnoxrGVhI948IDowSSbf8PkvhMzv2EM9dzbuxcfrX4MBeZmojEoeoKJAa96%2ByhVoftavErE%2F11c7KVDQGS22kj64UmBlPdPqm3P8QuHosQibYp6zovDnGrXYBlFk1jwVAJTB0L01zx%2FI5xBpmUuB7DXpupfbnhLbl2cEffxB7LL80tz7DS%2BlEUTzGiFjUjnto1%2B%2Bt5i%2BFb0rDlW9kny6sANnV7viCMQBlPLTVvDqNzzTaq60umeESzsT2DOBpy72wpxJjvKJRP59yiKMYAPHbluUDvWtdCzfc7amW%2FrB2%2B0K93lXLTynAIlpaV2LZfW2JuRbYxZLtz566TuEz572VPwmuhesM%2B4f14CkQ2%2FNN2ObQSoxynmFZ9M1Ab5MMrt%2F70GOqUBHu61IS5K3TI8y6sdXOUvbz5Y9xbGpepqd4CahMBeCfm91X1Gf9pt2RTAg5cnNw4MLOKQEJwjN82Lx4rmk9lJ4RhRDHz0WhDR%2Fi6vn%2BNS71sENqjDtw0NTZQnvORkyo7yn17lapPwy5vyKP7Inht0pA3AfV75AelhlnE3fkYCDjZLg5IqsY9Ljxe4iqucVheJrzte6Q1Cbfj%2BCmXOWChcDuSOVzC1&X-Amz-Signature=86a19a46502820cf171799e3d08ca7f8406eab72ed77c24c9faf1c02742dd31d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
